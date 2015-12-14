var Lessons = require('./lesson.model');

exports.getLesson = function (req, res, next){
  Lessons.find({"missionTitle": req.params.mission}).populate('firstLesson').populate('secondLesson').populate('thirdLesson').populate('fourthLesson').exec(function (err, missionObj){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(missionObj);
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
