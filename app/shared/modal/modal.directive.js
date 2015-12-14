var dojo = angular.module('dojo');

dojo.directive("bootstrapModal", function() {
  return {
    restrict: 'AE',
    templateUrl: 'bootstrap/modal/modalTemplate.html',
    replace: true,
    scope: {
      title: '=',
      body: '=',
      audioFile: '=',
      audioPlay: '&'
    }
  };
});
