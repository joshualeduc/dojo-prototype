var Ctrl = require('./lesson.controller');

module.exports = function (app){
  app.route('/api/lessons')
    .post(Ctrl.createLesson);
  app.route('/api/lessons/:mission')
    .get(Ctrl.getLesson);
};
