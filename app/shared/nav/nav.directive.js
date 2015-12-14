var dojo = angular.module('dojo');

dojo.directive("navigationButtons", function() {
  return {
    restrict: 'AE',
    templateUrl: 'bootstrap/nav/navTemplate.html',
    replace: true,
    scope: {
      nextSlide: '&',
      prevSlide: '&',
      grade: '&',
      submitButton: '='
    },
    controller: function($scope) {

    },
    link: function(scope, elements, attrs) {
      if(scope.submitButton) {
        angular.element($("#next").addClass("hidden"));
        angular.element($("#submit").removeClass("hidden"));
      }
    }
  };
});
