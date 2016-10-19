'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var signupRoute = require('./routes/signup');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/signup', signupRoute);

app.listen(PORT, function() {
    console.log('Server listening on Port %s', PORT);
});


