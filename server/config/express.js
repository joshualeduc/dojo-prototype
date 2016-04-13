var config = require('./config'),

 express = require('express'),
 bodyParser = require('body-parser'),
 cors = require('cors');

module.exports = function (){
  var app = express();

  app.set('views', ['./view']);
  app.set('view engine', 'ejs');
  app.get('/', function (req, res){
    res.render('index');
  });

  app.use(bodyParser.json());
  app.use(cors());
  require('../api/slides/slides.routes')(app);
  require('../api/lesson/lesson.routes')(app);
  app.use('/assets', express.static('./public'));
  app.use('/vendor', express.static('./node_modules'));

  //Going into my app folder until I learn gulp better
  app.use('/directive', express.static('./app/component'));
  app.use('/bootstrap', express.static('./app/shared'));

  return app;
};
