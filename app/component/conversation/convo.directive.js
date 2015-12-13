var dojo = angular.module('dojo');

dojo.directive("convoAssessment", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/convoTemplate.html',
    replace: true,
    scope: {
      danish: '@',
      placeholder: '@',
      answerText: '@',
      toGrade: '=',
      answerKey: '=',
      responseText: '=',
      grade: '&'
    },
    controller: function($scope, speechRec){
      $scope.toggleSpeechInput = function() {
        speechRec.toggleStartStop();
      };
      $scope.answerKey = $scope.answerText;
      $scope.inputText = '';
      $scope.formatAnswer = function() {
        $scope.toGrade = [$scope.inputText, $scope.answerText];
        if($scope.inputText.toLowerCase() == $scope.answerText.toLowerCase()) {
          $scope.responseGraded = 'Fantastic';
        }else {
          $scope.responseGraded = 'Try Again';
        }
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
