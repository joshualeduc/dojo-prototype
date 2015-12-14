var dojo = angular.module('dojo');

dojo.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'assets/template/homeTemplate.html',
    controller: 'mainCtrl'
  })

  .when('/IntroduceYourself/:lesson/slide/:slideCount', {
    templateURL: 'assets/template/lessonTemplate.html',
    controller: 'playerCtrl',
    resolve: {
      lessonArray: function(getLesson){
        return getLesson.getLessonData();
      }
    }
  });
});
