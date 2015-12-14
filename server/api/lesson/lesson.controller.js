var Lessons = require('./lesson.model');

exports.getLesson = function (req, res, next){
  Slides.find({"missionTitle": req.params.mission}).exec(function (err, lessonObj){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(lessonObj);
    }
  });
};

exports.createLesson = function (req, res, next){
  new Lessons(req.body).save(function(err, data){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(data);
    }
  });
};
