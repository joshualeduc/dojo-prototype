var dojo = angular.module('dojo');

dojo.directive("progressBar", function() {
  return {
    restrict: 'AE',
    templateUrl: 'bootstrap/progress/progressTemplate.html',
    replace: true,
    scope: {
      slideNumber: '=',
      slideMax: '='
    }
  };
});
