var dojo = angular.module('dojo');

dojo.controller('mainCtrl', function($scope, speechRec) {
  $scope.speechRec = speechRec;
  $scope.start = speechRec.start;
  $scope.stop = speechRec.stop;
  $scope.answer = '';

  $scope.sidebar = false;
  $scope.sidebarClass = false;
  $scope.sidebarToggle = function() {
    $scope.sidebar = !$scope.sidebar;
    $scope.sidebarClass = !$scope.sidebarClass;
  };
});
