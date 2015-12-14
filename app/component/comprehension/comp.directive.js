var dojo = angular.module('dojo');

dojo.directive("comprehensionAssessment", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directive/comprehension/compTemplate.html',
    replace: true,
    scope: {
      option1: '@',
      option2: '@',
      option3: '@',
      option4: '@',
      audioFile: '=',
      audioPlay: '&',
      answerText: '@',
      toGrade: '=',
      answerKey: '=',
      responseText: '='
    },
    controller: function($scope) {
      $scope.select = function(selectionText) {
        $scope.responseChosen = selectionText;
        $scope.toGrade = selectionText;
        $scope.answerKey = $scope.answerText;
        angular.element($(".section1").addClass("hidden"));
        angular.element($(".response-selection").removeClass("hidden"));
        angular.element($("#mascot").attr("src", '/images/mascotChallengeBeard.png'));
      };
    },
    link: function(scope, elements, attrs) {
//            AutoPlay
      setTimeout(function() {$(".quoteLine").removeClass("invisible");}, 700);
      setTimeout(function() {$(".section1").removeClass("invisible");}, 700);
      setTimeout(function() {$(".section2").removeClass("invisible");}, 1400);
    }
  };
});
