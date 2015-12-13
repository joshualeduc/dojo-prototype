var dojo = angular.module('dojo');

dojo.directive("progressBar", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/progressbar.html',
    replace: true,
    scope: {
      slideNumber: '=',
      slideMax: '='
    }
  };
});
