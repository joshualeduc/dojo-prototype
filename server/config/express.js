var config = require('./config'),

 express = require('express'),
 bodyParser = require('body-parser'),
 cors = require('cors');

module.exports = function (){
  var app = express();
  app.use(bodyParser.json());
  app.use(cors());
  require('../api/slides/slides.routes')(app);
  require('../api/lesson/lesson.routes')(app);
  app.use('/assets', express.static(__dirname + './public'));
  app.use('/vendor', express.static(__dirname + './node_modules'));

  //Going into my app folder until I learn gulp better
  app.use('/directive', express.static('./app/component'));
  app.use('/bootstrap', express.static('./app/shared'));
  return app;
};
