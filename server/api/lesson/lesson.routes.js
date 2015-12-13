var Ctrl = require('./lesson.controller');

module.exports = function (app){
  app.route('/api/lessons')
    .post(Ctrl.postLesson)
    .get(Ctrl.getLesson);
};
