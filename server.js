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

var app = express();

var PORT = process.env.PORT || 3000;

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
    res.redirect('/users/' + req.user.attributes.id);
}); 

app.get('/logout', (req, res) => {
    req.logout();
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
app.use('/signup', (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.send(401);
    }
    console.log("OK, authenticated");
    next();
});

app.get('/users/:id', (req, res) => {
    console.log('User is authenticated', req.isAuthenticated());
    res.json( req.user );
});


app.listen(PORT, function() {
    console.log('Server listening on Port %s', PORT);
});


