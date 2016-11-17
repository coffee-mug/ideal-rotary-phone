'use strict';

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var verify = require('./lib/verify.js');

var signupRoute = require('./routes/signup');
var loginRoute = require('./routes/login');

var Users = require('./models/users');
var Store = require('./models/stores');
var Prospection = require('./models/prospection');

var moment = require('moment');

var app = express();

var PORT = process.env.PORT || 6000;

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
  return new Prospection({
    store_name: req.body.storeName,
    address: req.body.address,
    address_details: req.body.addressDetails,
    city: req.body.city,
    postal_code: req.body.postalCode,
    telephone: req.body.telephone,
    email: req.body.email,
    created_at: req.body.created_at
  })
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
