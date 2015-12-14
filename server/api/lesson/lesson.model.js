var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LessonSchema = new Schema({
  title: String,
  introduction: String,
  culture: String,
  firstLesson: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Slides'}
  ],
  secondLesson: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Slides'}
  ],
  thirdLesson: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Slides'}
  ],
  fourthLesson: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Slides'}
  ],
  sideBar: {
    lessonTitle: String,
    introTitle: String,
    introImg: String,
    cultureTitle: String,
    cultureImg: String,
    lesson1Title: String,
    lesson1Img: String,
    lesson2Title: String,
    lesson2Img: String,
    lesson3Title: String,
    lesson3Img: String,
    lesson4Title: String,
    lesson4Img: String
  }
});

module.exports = mongoose.model('Lessons', LessonSchema);
