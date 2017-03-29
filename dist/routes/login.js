'use strict';

var express = require('express');
var passport = require('passport');
var localStrategy = require('passport-local');
var verify = require('../lib/verify.js');

var router = express.Router();


//var Users = require('../models/users');

passport.use(new localStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password',
    session: false
    }, 
    verify
));

router.route('/')
    .post(passport.authenticate('local'), (req, res) => { 
            // Success
            console.log(res); 
    }); 
        
module.exports = router;
