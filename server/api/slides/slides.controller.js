var Slide = require('./slides.model');

exports.getSlide = function (req, res, next){
  Slide.find({"lessonTitle": req.params.lesson}).exec(function (err, slides){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(slides);
    }
  });
};

exports.addSlide = function (req, res, next){
  new Slide(req.body).save(function(err, data){
    if (err){
      res.status(500).send(err);
    } else{
      res.send(data);
    }
  });
};
