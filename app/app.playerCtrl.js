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

  $scope.slideObj.audioPlay = player.play;

// User Data
  $scope.userName = userInput.userName;
  $scope.job = userInput.job;
  $scope.iAmJob = userInput.iAmJob;
  $scope.jobEnglish = userInput.jobEnglish;
  $scope.jobDanish = userInput.jobDanish;
  $scope.jobTitle = userInput.jobTitle;
  $scope.jobPronunciation = userInput.jobPronunciation;
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
    userInput.userName = $scope.userName;
    gradingService.gradeName($scope.userName);
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
    }else if($routeParams.slideCount == 2){
      $scope.slideObj.gradeFunc = $scope.gradeName;
      $scope.slideObj.submitButton = true;
    }else if($routeParams.slideCount == 4 || $routeParams.slideCount == 5){
      $scope.slideObj.gradeFunc = $scope.gradePatt;
      $scope.slideObj.submitButton = true;
    }else if($routeParams.slideCount == 15 || $routeParams.slideCount == 18 || $routeParams.slideCount == 19){
      $scope.slideObj.gradeFunc = $scope.gradeProd;
      $scope.slideObj.submitButton = true;
    }
  };
  $scope.slideSettings();

  $scope.accountant = function() {
    userInput.job = $scope.audioFiles.revisor;
    userInput.iAmJob = $scope.audioFiles.jegErRevisor;
    userInput.jobDanish = 'revisor';
    userInput.jobEnglish = 'accountant';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/revisorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.analyst = function() {
    userInput.job = $scope.audioFiles.analytiker;
    userInput.iAmJob = $scope.audioFiles.jegErAnalytiker;
    userInput.jobDanish = 'analytiker';
    userInput.jobEnglish = 'analyst';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/analytikerWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/yPronunciation.png';
    $scope.nextSlide();
  };
  $scope.consultant = function() {
    userInput.job = $scope.audioFiles.konsulent;
    userInput.iAmJob = $scope.audioFiles.jegErKonsulent;
    userInput.jobDanish = 'konsulent';
    userInput.jobEnglish = 'consultant';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/konsulentWord.png';
    userInput.jobPronunciation = '';
    $scope.nextSlide();
  };
  $scope.designer = function() {
    userInput.job = $scope.audioFiles.designer;
    userInput.iAmJob = $scope.audioFiles.jegErDesigner;
    userInput.jobDanish = 'designer';
    userInput.jobEnglish = 'designer';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/designerWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.engineer = function() {
    userInput.job = $scope.audioFiles.ingenior;
    userInput.iAmJob = $scope.audioFiles.jegErIngenior;
    userInput.jobDanish = 'ingeniør';
    userInput.jobEnglish = 'engineer';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/images/ingeniorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
  $scope.manager = function() {
    userInput.job = $scope.audioFiles.direktor;
    userInput.iAmJob = $scope.audioFiles.jegErDirektor;
    userInput.jobDanish = 'direktør';
    userInput.jobEnglish = 'manager';
    userInput.jobTitle = 'assets/lessons/introduce-yourself/introduction-1/direktorWord.png';
    userInput.jobPronunciation = 'assets/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
});
