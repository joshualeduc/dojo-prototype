var dojo = angular.module('dojo');

dojo.directive("patternAssessment", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directive/pattern/pattTemplate.html',
    replace: true,
    scope: {
      data: '='
    },
    controller: function($scope){
      $scope.data.answers = [];
      $scope.dropCallback = function(){
        $scope.data.toGrade = $scope.data.answers;
      };
    },
    link: function(scope, elements, attrs) {
      if(!scope.data.list0[0]){
        angular.element($(".list0").addClass("hidden"));
        angular.element($(".list1").addClass("col-xs-offset-1point5"));
      }else if(!scope.data.list1[0]){
        angular.element($(".list1").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }else if(!scope.data.list2[0]){
        angular.element($(".list2").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }else if(!scope.data.list3[0]){
        angular.element($(".list3").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }
    }
  };
});
