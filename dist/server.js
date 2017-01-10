'use strict';

var express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    verify = require('./lib/verify.js'),
    signupRoute = require('./routes/signup'),
    loginRoute = require('./routes/login');


/*** Models **/
var Users = require('./models/users'),
    Store = require('./models/stores'),
    Prospection = require('./models/prospection'),
    wonderfulSalons = require('./models/wonderful_salons'),
    prestations = require('./models/prestations'),
    offers = require('./models/offers');

var moment = require('moment');

var app = express(),
    PORT = process.env.PORT || 8000;

app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Required for passport
app.use(session({ secret: 'youSuck', resave: false, saveUninitialized: true, cookie: { secure: false }  }));
app.use(passport.initialize());
app.use(passport.session({ secret: 'youSuck'}));

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
    }, 
    verify
));

passport.serializeUser( (user, done) => {
    done(null, user);
});

passport.deserializeUser( (user, done) => {
    done(null, user);
});

// Routes
app.use('/signup', signupRoute);

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({userId: req.user.attributes.id});
}); 

app.get('/logout', (req, res) => {
    req.logout();
    // Need to fix logout client side localStorage
    console.log('Ok, logged out');
    res.json();
});

app.get('/users', (req, res) => {
    Users
      .fetchAll()
      .then( (users) => {
          res.json({ users });
      });
});

// Need to be authenticated
app.get('/users/:id', (req, res) => {
    console.log('User is authenticated', req.isAuthenticated());
    res.json(req.user);
});

// Get Store Info
app.get('/admin/salon/:user_id', (req, res) => {
 Users
    .where('id', req.params.user_id)
    .fetch({ withRelated: ['store'] })
    .then ( function(store) {
      res.json({ store });
    });
});

// Update Store info
app.post('/admin/salon/:user_id', (req, res) => {
    console.log(req.params);
    return new Store({
      raisonSoc: req.body.raisonSoc,
      adresse: req.body.adresse,
      adresse_complement: req.body.adresse_comp,
      ville: req.body.ville,
      cp: req.body.cp,
      tel: req.body.telephone,
      description: req.body.description,
      user_id: req.body.user_id
    })
    .save()
    .then ( (saved) => {
      res.json({ saved });
    });
});

app.post('/prospection', (req, res) => {
  // Fucking code smell, need to change that like for put verb
  var fields_to_update,
      newProspect;

  fields_to_update = Object.keys(req.body).map( (e) => { return e });

  newProspect = {};

  fields_to_update.forEach( (e) => {
    newProspect[e] = req.body[e]
  });

  if (newProspect['email'] === "" || newProspect['contact_comments'] === "") {
    return new Error('New Prospect from Landing page does not have an email or a role');
  }

  // DEBUG
  console.log('NewProspect content: ', newProspect);
  console.log('req.body content: ', req.body);

  return new Prospection(
   newProspect
  )
  .save()
  .then( (saved) => {
    res.json( { saved } );
  });
});

app.get('/prospection/admin', (req, res) => {
    Prospection
      .fetchAll()
      .then( (users) => {
          res.json({ users });
      });
});

app.get('/prospection/admin/:id', (req, res) => {
    Prospection
      .where('id', req.params.id)
      .fetch()
      .then( (prospect) => { 
          res.json({ prospect }); 
      });
});

app.put('/prospection/admin/:id', (req, res) => {
    var fields_to_update,
        updateObject;

    // While curent implementation allow for one update, this will make updating several
    // fields easier. 
    // @returns an array containing the fields to update
    fields_to_update = Object.keys(req.body).map( (e) => { return e });
    console.log(fields_to_update);

    updateObject = {};

    fields_to_update.forEach( (e) => {
      updateObject[e] = req.body[e]
    });

    // Add updated timestamp
    updateObject['updated_at'] = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    
    Prospection
      .where('id', req.params.id)
      .save(updateObject, { method: 'update' })
      .then( (updatedModel) => {
        res.json({ updatedModel });
      });
});


/** OK let's do the fuckings routes now */

/*** SALONS ****/

// GET: get all the salons, can filter by name or city.
app.get('/salons', (req, res) => {
  var limit,
      name,
      city;

  limit = 10;
  
  req.query.name ? name = req.query.name : name = '';
  req.query.city ? city = req.query.city : city = '';

  console.log("Query Name: ", name);
  console.log("Query City: ", city);

  wonderfulSalons.query( (qb) => { 
    qb
    .where('city', 'LIKE', city + '%')
    .andWhere('company_name', 'LIKE', "%" + name + "%")
    }).fetchAll()
    .then( (models) => {
     res.json(models); 
    });
});


// Get salons list filtered by haircut + "haircut add-ons";
app.get('/haircuts/:coupe', (req, res) => {
  // Given an haricut, search for the prestation id, then returns from offers list of
  // salons using this prestation id. 
  let prestation_id = '',
    city = '',
    response = [];

  req.query.city ? city = req.query.city : city = '';

  prestations
    .where('prestation_name', 'LIKE', '%'+req.params.coupe+'%')
    .fetch()
    .then( (id) => { 
      wonderfulSalons
        .where('city', 'like', '%'+city+'%')
        .fetchAll({ withRelated: ['offers', {
          'offers': (qb) => { qb.where('prestation_id', id.id); }
        }]})
        .then( (models) => {
          models = models.filter( (e) => {
            return e.toJSON().offers.length > 0
          });
          res.json(models);
        });
    });
});

/** APPOINTMENTS **/
// Should return an object with lists of appoinments hours as values.
// The appointment table would have one FK for the hairdresser, one for the customer
// Use one column for the date and one column for the number of minutes past midnight. 




app.listen(PORT, function() {
    console.log('Server listening on Port %s', PORT);
});
