var dojo = angular.module('dojo');

dojo.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'assets/template/homeTemplate.html',
    controller: 'mainCtrl'
  });

  // .when('/:mission/:lesson/slide/:slideCount', {
  //   templateUrl : function($routeParams) {
  //     return 'lessons/' + $routeParams.mission + '/' + $routeParams.lesson + '/slide' + $routeParams.slideCount + '.html';
  //   },
  //   controller: 'playerCtrl'
  // });
});
