var dojo = angular.module('dojo');

dojo.directive("bootstrapModal", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/bootstrapModal.html',
    replace: true,
    scope: {
      title: '=',
      body: '=',
      audioFile: '=',
      audioPlay: '&'
    }
  };
});
