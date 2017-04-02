'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

/** ALL ROUTES **/
var coiffeurRoute = require('./routes/coiffeur');
var salonRoute = require('./routes/salon');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/coiffeur', coiffeurRoute);
app.use('/salon', salonRoute);

app.listen(PORT, function() {
    console.log('Contacts server listening on port %s.', PORT);
});

/** SERVER CONFIG **/
/*app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Required for passport
app.use(session({ secret: 'youSuck', resave: false, saveUninitialized: true, cookie: { secure: false }  }));
app.use(passport.initialize());
app.use(passport.session({ secret: 'youSuck'}));*/

/** AUTH CONFIG **/
/*passport.use(new localStrategy({
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
});*/


/** ROUTES **/
//app.use('/signup', signupRoute);

/*app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({userId: req.user.attributes.id});
});

app.get('/logout', (req, res) => {
    req.logout();
    // Need to fix logout client side localStorage
    console.log('Ok, logged out');
    res.json();
});*/ 

/*** SALONS ****/

// GET: get all the salons, can filter by name or city.
/*app.get('/api/hairdressers', (req, res) => {
  var limit = 10,
      name,
      city;

  name = req.query.name || '';
  city = req.query.city || '';

  // Debug
  console.log("Query Name: ", name);
  console.log("Query City: ", city);

  Salon.query( (qb) => { 
    qb
    .where('city', 'LIKE', city + '%')
    .andWhere('name', 'LIKE', "%" + name + "%")
    }).fetchAll()
    .then( (models) => {
     res.json(models); 
    });
});*/


// Get salons list filtered by haircut + "haircut add-ons";
/*app.get('/api/haircuts/:coupe', (req, res) => {
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
});*/

/** APPOINTMENTS **/
// Should return an object with lists of appoinments hours as values.
// The appointment table would have one FK for the hairdresser, one for the customer
// Use one column for the date and one column for the number of minutes past midnight. 
/*app.listen(PORT, function() {
    console.log('Server listening on Port %s', PORT);
});*/
