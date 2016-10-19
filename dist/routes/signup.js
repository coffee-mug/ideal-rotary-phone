'use strict';

var express = require('express');

var Users = require('../models/users');

var router = express.Router();

router.route('/')
    .post(function(req, res) {
        new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            password: req.body.password
        })
        .save()
        .then(function(saved) {
            res.json({ saved });
        });
    });

module.exports = router;
