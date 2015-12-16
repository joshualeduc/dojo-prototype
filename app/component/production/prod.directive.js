var dojo = angular.module('dojo');

dojo.directive("productionAssessment", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directive/production/prodTemplate.html',
    replace: true,
    scope: {
      data: '='
    },
    controller: function($scope, speechRec){
      $scope.toggleSpeechInput = function() {
        speechRec.toggleStartStop();
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
