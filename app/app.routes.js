var dojo = angular.module('dojo');

dojo.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider

  .state('player', {
    url: '/viewer',
    templateUrl: 'assets/template/playerTemplate.html',
    controller: 'loadCtrl',
    // resolve: {
    //   lessonArray: function(getLesson){
    //     return getLesson.getLessonData();
    //   }
    // }
  })

  .state('player.load', {
    templateUrl: 'assets/template/loadTemplate.html '
  })

  .state('player.play', {
    url: '/:mission/:lesson/slide/:slideCount',
    templateUrl: 'assets/template/lessonTemplate.html',
    controller: 'playerCtrl'
  })

  .state('home', {
    url: '/',
    templateUrl:'assets/template/homeTemplate.html',
    controller: 'mainCtrl'
  });
});
