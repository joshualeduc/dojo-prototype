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
      $scope.answerKey = $scope.answerArray;
      $scope.answers = [];
      $scope.dropCallback = function(){
        $scope.toGrade = $scope.answers;
      };
    },
    link: function(scope, elements, attrs) {
      if(!scope.list0){
        angular.element($(".list0").addClass("hidden"));
        angular.element($(".list1").addClass("col-xs-offset-1point5"));
      }else if(!scope.list1){
        angular.element($(".list1").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }else if(!scope.list2){
        angular.element($(".list2").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }else if(!scope.list3){
        angular.element($(".list3").addClass("hidden"));
        angular.element($(".list0").addClass("col-xs-offset-1point5"));
      }
    }
  };
});
