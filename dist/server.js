var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var Prospection = require('./models/prospection');

app = express();
app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Routes
app.post('/prospection', (req, res) => {
  return new Prospection({
    store_name: req.body.storeName,
    address: req.body.address,
    address_details: req.body.addressDetails,
    city: req.body.city,
    postal_code: req.body.postalCode,
    telephone: req.body.telephone,
    email: req.body.email
  })
  .save()
  .then( (saved) => {
    res.json( { saved } );
  });
});

app.listen(port);

console.log('server started '+ port);
