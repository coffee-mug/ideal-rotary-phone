'use strict';

var express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    verify = require('./lib/verify.js');

var signupRoute = require('./routes/signup'),
    loginRoute = require('./routes/login');

var Users = require('./models/users'),
    Store = require('./models/stores'),
    Prospection = require('./models/prospection');

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

app.listen(PORT, function() {
    console.log('Server listening on Port %s', PORT);
});
