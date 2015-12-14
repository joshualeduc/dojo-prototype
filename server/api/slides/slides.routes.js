var Ctrl = require('./slides.controller');

module.exports = function (app){
  app.route('/api/slides')
    .post(Ctrl.addSlide);
  app.route('/api/slides/:lesson')
    .get(Ctrl.getSlide);
};
