var dojo = angular.module('dojo');

dojo.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'assets/template/homeTemplate.html',
    controller: 'mainCtrl'
  })

  .when('/:mission/:lesson/slide/:slideCount', {
    templateUrl : 'assets/template/lessonTemplate.html',
    controller: 'playerCtrl'
  });
});
