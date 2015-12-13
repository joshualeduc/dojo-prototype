var dojo = angular.module('dojo');

dojo.directive("imagePage", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/imageTemplate.html',
    replace: true,
    scope: {
      image: '='
    },
    link: function(scope, elements, attrs) {
//            AutoPlay
      setTimeout(function() {$(".quoteLine").removeClass("invisible");}, 700);
      setTimeout(function() {$(".section1").removeClass("invisible");}, 700);
      setTimeout(function() {$(".section2").removeClass("invisible");}, 1400);
    }
  };
});
