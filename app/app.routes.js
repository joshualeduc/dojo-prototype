var dojo = angular.module('dojo');

dojo.config(function ($routeProvider) {
  $routeProvider

  .when('/:mission/:lesson/slide/:slideCount', {
    templateUrl: 'assets/template/lessonTemplate.html',
    controller: 'playerCtrl',
    resolve: {
      lessonArray: function(getLesson){
        return getLesson.getLessonData();
      }
    }
  })

  .when('/', {
    templateUrl:'assets/template/homeTemplate.html',
    controller: 'mainCtrl'
  });
});
