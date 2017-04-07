/**
 * Created by Benoit on 30/03/2017.
 */
'use strict';

var express = require('express');

var _salon = require('../models/salon');

var router = express.Router();

var knexconfig = require('../knexfile');
var knex = require('knex')({ client: 'mysql' });

router.route('/').get(function(req, res) {
        _salon.fetchAll().then(function(salon) {
            console.log(salon);
            res.json({ salon }); });
    });

router.route('/getSalonByCategorie/:categorie').get(function(req, res) {
    console.log("Categorie: " + req.params.categorie);
    // Outputs:
    // SELECT *
    // FROM `salon`
    // INNER JOIN `appartient` on appartient.SalonID = salon.SalonID
    // INNER JOIN `categorie` on appartient.categorie_id = categorie.categorie_id
    // WHERE categorie.Nom = ""
    knex.withSchema('salon').select('*').from('salon').then(function(salon) { res.json({ salon }); });
    /*_salon.innerJoin('appartient', 'salon.SalonID', 'appartient.SalonID')
        .innerJoin('categorie', 'appartient.categorie_id', 'categorie.categorie_id')
        .where('categorie.Nom', ':categorie')*/

    });

module.exports = router;