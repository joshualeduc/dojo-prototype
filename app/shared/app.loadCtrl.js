var dojo = angular.module('dojo');

dojo.controller('loadCtrl', function($scope, $state, $timeout, getLesson) {
  $scope.loadLesson = function (){
    getLesson.getLessonData().then(function(data){
      $scope.lessonArray = data;
      $state.go('player.play', {mission: 'IntroduceYourself', lesson: 'introduction1', slideCount: 1});
    });
  };
  $timeout(function(){$scope.loadLesson(), 2000});
});
