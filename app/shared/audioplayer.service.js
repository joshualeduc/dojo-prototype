var dojo = angular.module('dojo');

// Creating the audio element for our player
dojo.factory('audio', function($document) {
  var audio = $document[0].createElement('audio');
  return audio;
});

// Our audio player
dojo.factory('player', function(audio, $rootScope) {
  var player = {

    play: function(clip) {
      audio.src = clip;
      audio.play();
      player.playing = true;
    },

    stop: function() {
      if (player.playing) {
        audio.pause();
        player.playing = false;
      }
    }
  };

  //  Stops the audio when the clip ends
  audio.addEventListener('ended', function() {
    $rootScope.$apply(player.stop());
  });
  return player;
});

dojo.factory('audioService', function($http, $routeParams){
  return $http.get('/lessons/' + $routeParams.mission + '/audioList.json');
});
