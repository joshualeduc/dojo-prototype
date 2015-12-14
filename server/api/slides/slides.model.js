var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var obj = require('./slides.objects');

var SlideSchema = new Schema({
  lessonTitle: String,
  slidePosition: Number,
  compT: obj.comp,
  convoT: obj.convo,
  imgT: obj.img,
  // pattT: obj.patt,
  prodT: obj.prod,
  statT: obj.stat,
  teachT: obj.teach,
  uniqueT: obj.unique
});

module.exports = mongoose.model('Slide', SlideSchema);
