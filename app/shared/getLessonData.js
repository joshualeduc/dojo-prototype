var dojo = angular.module('dojo');

dojo.service('getLesson', function($http, $q, $routeParams){
  this.getLessonData = function(){
    var deferred = $q.defer();
    $http.get('/api/lessons/IntroduceYourself').then(function(data){
      var array = data.data[0].firstLesson;
      deferred.resolve(array);
    });
    return deferred.promise;
  };
});
