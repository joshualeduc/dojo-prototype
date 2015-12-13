var dojo = angular.module('dojo');

dojo.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'pages/home.html',
    controller: 'mainCtrl'
  })

  .when('/intro', {
    templateUrl:'pages/intro.html',
    controller: 'playerCtrl'
  })

  .when('/:mission/:lesson/slide/:slideCount', {
    templateUrl : function($routeParams) {
      return 'lessons/' + $routeParams.mission + '/' + $routeParams.lesson + '/slide' + $routeParams.slideCount + '.html';
    },
    controller: 'playerCtrl'
  });
});
