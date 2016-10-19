var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var signupRoute = require('./routes/signup');

app = express();
app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

// Routes
app.use('/signup', signupRoute);

app.listen(port);

console.log('server started '+ port);
