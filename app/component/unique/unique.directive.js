var dojo = angular.module('dojo');

dojo.directive("uniquePage", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directive/unique/uniqueTemplate.html',
    replace: true
  };
});
