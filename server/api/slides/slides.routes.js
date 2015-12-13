var Ctrl = require('./slides.controller');

module.exports = function (app){
  app.route('/api/slides')
    .post(Ctrl.postSlide)
    .get(Ctrl.getSlide);
};
