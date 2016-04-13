var dojo = angular.module('dojo');

dojo.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider

  .state('player', {
    url: '/viewer',
    templateUrl: 'app/template/playerTemplate.html',
    controller: 'loadCtrl',
    resolve: {
      lessonArray: function(getLesson){
        return getLesson.getLessonData();
      }
    }
  })

  .state('player.load', {
    templateUrl: 'app/template/loadTemplate.html '
  })

  .state('player.play', {
    url: '/:mission/:lesson/slide/:slideCount',
    templateUrl: 'app/template/lessonTemplate.html',
    controller: 'playerCtrl'
  })

  .state('home', {
    url: '/',
    templateUrl:'app/template/homeTemplate.html',
    controller: 'mainCtrl'
  });
});
