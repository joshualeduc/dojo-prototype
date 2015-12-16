var dojo = angular.module('dojo');

dojo.service('gradingService', function() {
  this.responseText = '';
  this.answerKey = '';
  this.gradeComp = function(userSelection, answer) {
    this.responseText = '';
    if(userSelection === answer) {
      responseArray = ['Fantastisk!', 'Det er perfekt!', 'Du er smart!'];
      this.responseText = responseArray[Math.floor(Math.random() * responseArray.length)];
      angular.element($(".response-selection").addClass("hidden"));
      angular.element($(".response-answer").removeClass("hidden"));
      angular.element($("#mascot").attr("src", 'assets/images/mascotBigSmile2.png'));
      angular.element($(".section2").addClass("invisible"));
    }else {
      this.responseText = 'Close, but the correct answer is '+ answer;
      angular.element($(".response-selection").addClass("hidden"));
      angular.element($(".response-answer").removeClass("hidden"));
      angular.element($("#mascotComp").attr("src", 'assets/images/mascotChallengeBeard.png'));
      angular.element($(".section2").addClass("invisible"));
    }
  }.bind(this);
  this.gradeProd = function(inputString, answerString) {
    this.responseText = '';
    if(inputString.toLowerCase() == answerString.toLowerCase()) {
      responseArray = ['Fantastisk!', 'Det er perfekt!', 'Du er smart!'];
      this.responseText = responseArray[Math.floor(Math.random() * responseArray.length)];
      angular.element($(".section1").addClass("hidden"));
      angular.element($(".response-answer").removeClass("hidden"));
      console.log('change mascot');
      angular.element($("#mascotProd").attr("src", 'assets/images/mascotBigSmile2.png'));
      angular.element($("#mascotConvo").attr("src", 'assets/images/mascotBigSmile2.png'));

    }else {
      this.responseText = 'Try Again';
      angular.element($(".section1").addClass("hidden"));
      angular.element($(".response-answer").removeClass("hidden"));
      angular.element($("#mascotProd").attr("src", 'assets/images/mascotChallengeBeard.png'));
      angular.element($("#mascotConvo").attr("src", 'assets/images/mascotChallengeBeard.png'));
    }
  }.bind(this);
  this.gradePatt = function(inputArray, answerArray) {
    this.responseText = '';
    if(inputArray[0].title == answerArray[0].title && inputArray[1].title == answerArray[1].title) {
      responseArray = ['Fantastisk!', 'Det er perfekt!', 'Du er smart!'];
      this.responseText = responseArray[Math.floor(Math.random() * responseArray.length)];
      angular.element($(".section1").addClass("hidden"));
      angular.element($(".patt-answer").removeClass("hidden"));
    }else {
      this.responseText = 'Try Again';
      angular.element($(".section1").addClass("hidden"));
      angular.element($(".patt-answer").removeClass("hidden"));
    }
  }.bind(this);
  this.gradeName = function(string) {
    angular.element($(".section1").addClass("hidden"));
    angular.element($(".section3").addClass("invisible"));
    angular.element($(".section4").addClass("invisible"));
    angular.element($(".section3").removeClass("hidden"));
    angular.element($(".section4").removeClass("hidden"));
    angular.element($(".section3").removeClass("invisible"));
    setTimeout(function() {$(".section4").removeClass("invisible");}, 700);
  };
  this.gradeJob = function() {
  };
});
