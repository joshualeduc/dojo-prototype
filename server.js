process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

var mongoose = require('mongoose');


var app = require('./server/config/express')(),
    db = require('./server/config/mongoose')();

app.listen(port);
