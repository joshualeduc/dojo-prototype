var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LessonSchema = new Schema({
  title: {

  },
  introduction: {

  },
  culture: {

  },
  firstLesson: {

  },
  secondLesson: {

  },
  thirdLesson: {

  },
  fourthLesson: {

  },
  sideBar: {

  },
  audioList: {

  },
  imageFolder: {

  }
});

module.exports = mongoose.model('Lessons', SlideSchema);
