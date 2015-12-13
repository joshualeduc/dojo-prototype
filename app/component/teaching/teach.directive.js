var dojo = angular.module('dojo');

dojo.directive("teachingPage", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/teachingTemplate.html',
    replace: true,
    scope: {
        phraseDanish: '@',
        phraseEnglish: '@',
        audioFile: '=',
        audioPlay: '&'
    },
    link: function(scope, elements, attrs) {
//            AutoPlay
        setTimeout(function() {$(".quoteLine").removeClass("invisible");}, 700);
        setTimeout(function() {$(".section1").removeClass("invisible");}, 700);
        setTimeout(function() {$(".section2").removeClass("invisible");}, 1400);
        setTimeout(function() {scope.audioPlay({ file: scope.audioFile });}, 2100);
    }
  };
});
