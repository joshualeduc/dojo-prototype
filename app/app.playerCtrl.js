var dojo = angular.module('dojo');

dojo.controller('playerCtrl', function($scope, $timeout, $routeParams, $location, $http, lessonArray, player, userInput, speechRec, gradingService) {
// Get Lesson Data
  $scope.currentSlide = lessonArray[$routeParams.slideCount - 1];
  $scope.lessonLength = lessonArray.length;
  if($scope.currentSlide.compT){$scope.slideObj = $scope.currentSlide.compT;}
  if($scope.currentSlide.convoT){$scope.slideObj = $scope.currentSlide.convoT;}
  if($scope.currentSlide.prodT){$scope.slideObj = $scope.currentSlide.prodT;}
  if($scope.currentSlide.imgT){$scope.slideObj = $scope.currentSlide.imgT;}
  if($scope.currentSlide.statT){$scope.slideObj = $scope.currentSlide.statT;}
  if($scope.currentSlide.teachT){$scope.slideObj = $scope.currentSlide.teachT;}
  if($scope.currentSlide.uniqueT){$scope.slideObj = $scope.currentSlide.uniqueT;}
  if(!$scope.currentSlide.audioFile){$scope.slideObj.audioFile = '';}

  $scope.slideObj.audioPlay = player.play;

// User Data
  $scope.slideObj.userName = userInput.userName;
  $scope.slideObj.job = userInput.job;
  $scope.slideObj.iAmJob = userInput.iAmJob;
  $scope.slideObj.jobEnglish = userInput.jobEnglish;
  $scope.slideObj.jobDanish = userInput.jobDanish;
  $scope.slideObj.jobTitle = userInput.jobTitle;
  $scope.slideObj.jobPronunciation = userInput.jobPronunciation;
//    Autoplay Unique Slides
  setTimeout(function() {$(".quoteLine-auto").removeClass("invisible");}, 700);
  setTimeout(function() {$(".section1-auto").removeClass("invisible");}, 700);
  setTimeout(function() {$(".section2-auto").removeClass("invisible");}, 1400);

//    Navigation
  $scope.slideNum = $routeParams.slideCount;
  $scope.prevSlide = function() {
    // $scope.slideNum = $routeParams.slideCount;
    $scope.slideNum--;
    $scope.newUrl = $routeParams.mission + '/' + $routeParams.lesson + '/slide/' + $scope.slideNum;
    $location.path($scope.newUrl);
  };
  $scope.nextSlide = function() {
    // $scope.slideNum = $routeParams.slideCount;
    $scope.slideNum++;
    $scope.newUrl = $routeParams.mission + '/' + $routeParams.lesson + '/slide/' + $scope.slideNum;
    $location.path($scope.newUrl);
  };
  $scope.submitToNext = function() {
    angular.element($("#submit").addClass("hidden"));
    angular.element($("#next").removeClass("hidden"));
  };

//    Grading
  $scope.slideObj.toGrade = '';
  $scope.slideObj.responseText = '';
  $scope.gradeProd = function() {
    gradingService.gradeProd($scope.slideObj.toGrade, $scope.slideObj.answerKey);
    $scope.slideObj.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradePatt = function() {
    gradingService.gradePatt($scope.toGrade, $scope.answerKey);
    $scope.slideObj.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradeComp = function() {
    gradingService.gradeComp($scope.slideObj.toGrade, $scope.slideObj.answerKey);
    $scope.slideObj.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradeName = function() {
    userInput.userName = $scope.slideObj.userName;
    gradingService.gradeName($scope.slideObj.userName);
    $scope.submitToNext();
  };
  $scope.slideObj.gradeFunc = '';
  $scope.slideObj.submitButton = false;
  $scope.slideSettings = function (){
    if($scope.currentSlide.compT){
      $scope.slideObj.gradeFunc = $scope.gradeComp;
      $scope.slideObj.submitButton = true;
    }else if($scope.currentSlide.prodT){
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
    }else if($scope.currentSlide.slidePosition === 2){
      $scope.slideObj.gradeFunc = $scope.gradeName;
      $scope.slideObj.submitButton = true;
    }else if($scope.currentSlide.slidePosition === 4 || $scope.currentSlide.slidePosition === 5){
      $scope.slideObj.gradeFunc = $scope.gradePatt;
      $scope.slideObj.submitButton = true;
    }else if($scope.currentSlide.slidePosition === 15){
      $scope.slideObj.phraseString = '';
      $scope.slideObj.phraseString = $scope.slideObj.phrase + ' ' + $scope.slideObj.userName;
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
      $scope.slideObj.phrase = $scope.slideObj.phrase + ' ' + $scope.slideObj.userName;
      $scope.slideObj.answerKey = $scope.slideObj.answerKey + ' ' + $scope.slideObj.userName;
    }else if($scope.currentSlide.slidePosition === 17){
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
      $scope.slideObj.audioFile = $scope.slideObj.job;
      $scope.slideObj.danish = $scope.slideObj.jobDanish;
      $scope.slideObj.english = $scope.slideObj.jobEnglish;
      $scope.slideObj.modalTitle = $scope.slideObj.job;
      $scope.slideObj.modalBody = $scope.slideObj.jobPronunciation;
    }else if($scope.currentSlide.slidePosition == $scope.currentSlide.slidePosition === 18){
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
      $scope.slideObj.phrase = $scope.slideObj.jobEnglish;
      $scope.slideObj.answerKey = $scope.slideObj.jobDanish;
    }else if( $scope.currentSlide.slidePosition === 19){
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
      $scope.slideObj.phrase = $scope.slideObj.phrase + ' ' + $scope.slideObj.jobEnglish;
      $scope.slideObj.answerKey = $scope.slideObj.answerKey + ' ' + $scope.slideObj.jobDanish;
    }
  };
  $scope.slideSettings();

  $scope.accountant = function() {
    userInput.job = $scope.slideObj.audioFile.revisor;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErRevisor;
    userInput.jobDanish = 'revisor';
    userInput.jobEnglish = 'accountant';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/revisorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.analyst = function() {
    userInput.job = $scope.slideObj.audioFile.analytiker;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErAnalytiker;
    userInput.jobDanish = 'analytiker';
    userInput.jobEnglish = 'analyst';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/analytikerWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/yPronunciation.png';
    $scope.nextSlide();
  };
  $scope.consultant = function() {
    userInput.job = $scope.slideObj.audioFile.konsulent;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErKonsulent;
    userInput.jobDanish = 'konsulent';
    userInput.jobEnglish = 'consultant';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/konsulentWord.png';
    userInput.jobPronunciation = '';
    $scope.nextSlide();
  };
  $scope.designer = function() {
    userInput.job = $scope.slideObj.audioFile.designer;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErDesigner;
    userInput.jobDanish = 'designer';
    userInput.jobEnglish = 'designer';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/designerWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.engineer = function() {
    userInput.job = $scope.slideObj.audioFile.ingenior;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErIngenior;
    userInput.jobDanish = 'ingeniør';
    userInput.jobEnglish = 'engineer';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/ingeniorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
  $scope.manager = function() {
    userInput.job = $scope.slideObj.audioFile.direktor;
    userInput.iAmJob = $scope.slideObj.audioFile.jegErDirektor;
    userInput.jobDanish = 'direktør';
    userInput.jobEnglish = 'manager';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/direktorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
});
