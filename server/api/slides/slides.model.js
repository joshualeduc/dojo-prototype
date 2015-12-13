var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var obj = require('./slides.objects');

var SlideSchema = new Schema({
  lessonTitle: {
    title: String
  },
  compT: {
    nav: obj.nav,
    body: obj.comp
  },
  convoT: {
    nav: obj.nav,
    body: obj.convo
  },
  imgT: {
    nav: obj.nav,
    body: obj.img
  },
  pattT: {
    nav: obj.nav,
    body: obj.patt
  },
  prodT: {
    nav: obj.nav,
    body: obj.prod
  },
  statT: {
    nav: obj.nav,
    body: obj.stat
  },
  teachT: {
    nav: obj.nav,
    body: obj.teach
  },
  uniqueT: {
    path: obj.unique
  }
});

module.exports = mongoose.model('Slides', SlideSchema);
