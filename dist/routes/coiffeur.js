/**
 * Created by Benoit on 30/03/2017.
 */
'use strict';

var express = require('express');

var _coiffeurs = require('../models/professionnel');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        _coiffeurs.fetchAll().then(function(coiffeurs) { res.json({ coiffeurs }); });
    });

module.exports = router;