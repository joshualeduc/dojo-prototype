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

dojo.controller('playerCtrl', function($scope, $timeout, $routeParams, $location, $http, player, audioService, userInput, speechRec, gradingService) {
//    Autoplay Unique Slides
  setTimeout(function() {$(".quoteLine-auto").removeClass("invisible");}, 700);
  setTimeout(function() {$(".section1-auto").removeClass("invisible");}, 700);
  setTimeout(function() {$(".section2-auto").removeClass("invisible");}, 1400);


//    Sounds
  $scope.audioFiles = {};
  audioService.success(function(response){
    $scope.audioFiles = response;
  });
  $scope.audioPlay = player.play;

//   Unique Pages User Input
  $scope.userName = userInput.userName;
  $scope.job = userInput.job;
  $scope.iAmJob = userInput.iAmJob;
  $scope.jobEnglish = userInput.jobEnglish;
  $scope.jobDanish = userInput.jobDanish;
  $scope.jobTitle = userInput.jobTitle;
  $scope.jobPronunciation = userInput.jobPronunciation;

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
  $scope.toGrade = '';
  $scope.answerKey = '';
  $scope.responseText = '';
  $scope.gradeProd = function() {
    gradingService.gradeProd($scope.toGrade, $scope.answerKey);
    $scope.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradePatt = function() {
    gradingService.gradePatt($scope.toGrade, $scope.answerKey);
    $scope.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradeComp = function() {
    gradingService.gradeComp($scope.toGrade, $scope.answerKey);
    $scope.responseText = gradingService.responseText;
    $scope.submitToNext();
  };
  $scope.gradeName = function() {
    userInput.userName = $scope.userName;
    gradingService.gradeName($scope.userName);
    $scope.submitToNext();
  };

  $scope.accountant = function() {
    userInput.job = $scope.audioFiles.revisor;
    userInput.iAmJob = $scope.audioFiles.jegErRevisor;
    userInput.jobDanish = 'revisor';
    userInput.jobEnglish = 'accountant';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/images/revisorWord.png';
    userInput.jobPronunciation = '/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.analyst = function() {
    userInput.job = $scope.audioFiles.analytiker;
    userInput.iAmJob = $scope.audioFiles.jegErAnalytiker;
    userInput.jobDanish = 'analytiker';
    userInput.jobEnglish = 'analyst';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/images/analytikerWord.png';
    userInput.jobPronunciation = '/lessons/introduce-yourself/introduction-1/images/yPronunciation.png';
    $scope.nextSlide();
  };
  $scope.consultant = function() {
    userInput.job = $scope.audioFiles.konsulent;
    userInput.iAmJob = $scope.audioFiles.jegErKonsulent;
    userInput.jobDanish = 'konsulent';
    userInput.jobEnglish = 'consultant';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/images/konsulentWord.png';
    userInput.jobPronunciation = '';
    $scope.nextSlide();
  };
  $scope.designer = function() {
    userInput.job = $scope.audioFiles.designer;
    userInput.iAmJob = $scope.audioFiles.jegErDesigner;
    userInput.jobDanish = 'designer';
    userInput.jobEnglish = 'designer';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/images/designerWord.png';
    userInput.jobPronunciation = '/lessons/introduce-yourself/introduction-1/images/rPronunciation.png';
    $scope.nextSlide();
  };
  $scope.engineer = function() {
    userInput.job = $scope.audioFiles.ingenior;
    userInput.iAmJob = $scope.audioFiles.jegErIngenior;
    userInput.jobDanish = 'ingeniør';
    userInput.jobEnglish = 'engineer';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/images/ingeniorWord.png';
    userInput.jobPronunciation = '/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
  $scope.manager = function() {
    userInput.job = $scope.audioFiles.direktor;
    userInput.iAmJob = $scope.audioFiles.jegErDirektor;
    userInput.jobDanish = 'direktør';
    userInput.jobEnglish = 'manager';
    userInput.jobTitle = '/lessons/introduce-yourself/introduction-1/direktorWord.png';
    userInput.jobPronunciation = '/lessons/introduce-yourself/introduction-1/images/oPronunciation.png';
    $scope.nextSlide();
  };
});
