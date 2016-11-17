'use strict';

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var Prospection = require('./models/prospection');

var moment = require('moment');

var app = express();

var port = process.env.PORT || 3000;

app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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

app.listen(port);

console.log('server started '+ port);
