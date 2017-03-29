'use strict';

var express = require('express');
var router = express.Router();
var credential = require('credential');

//var Users = require('../models/users');


var pw = credential();

router.route('/')
// Hash password with credential and save to db. 
// TODO: need to fix double-click problem on the vue.
    .post(function(req, res) {
        var hash = "";
        pw.hash(req.body.password, (err, hash) => {
            if (err) { throw err; };
            console.log(" HASH obtained: ", hash); 
            new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                password: hash 
            })
            .save()
            .then(function(saved) {
                res.json({ saved });
            });
        });
    });

module.exports = router;
