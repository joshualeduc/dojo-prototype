var Slides = require('./slides.model');

exports.getSlide = function (req, res, next){
  Slides.find({"lessonTitle": req.params.lesson}).exec(function (err, slides){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(slides);
    }
  });
};

exports.addSlide = function (req, res, next){
  new Slides(req.body).save(function(err, data){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(data);
    }
  });
};
