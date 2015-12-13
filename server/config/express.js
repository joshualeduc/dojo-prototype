var config = require('./config'),

 express = require('express'),
 bodyParser = require('body-parser'),
 cors = require('cors');

module.exports = function (){
  var app = express();
  app.use(bodyParser.json());
  app.use(cors());
  require('../api/slides/slides.routes')(app);
  require('../api/unique/unique.routes')(app);
  require('../api/lesson/lesson.routes')(app);
  app.use('/assets', express.static('./public'));
  app.use('/vendor', express.static('./node_modules'));
  return app;
};
