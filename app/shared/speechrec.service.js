var dojo = angular.module('dojo');

dojo.factory('speechRec', function(){
  var speechFactory = {};
  var recognizing = false;

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  reset = function(){
    recognizing = false;
    speechToggle.src = "assets/images/recordButton.png";
  };
  recognition.onend = reset;

  recognition.onresult = function(event){
    var interim = "";
    var final = "";
    for (var i = 0; i < event.results.length; i++){
      if (event.results[i].isFinal){
        final += event.results[i][0].transcript;
      }else {
        interim += event.results[i][0].transcript;
      }
    }
    if(final === 'yy'){
      speechInput.value = 'jeg';
    }else if(final === 'r'){
      speechInput.value = 'er';
    }else if(final === 'youtube'){
      speechInput.value = 'du';
    }else{
      speechInput.value = final;
    }
    speechInput.placeholder = interim;
  };

  speechFactory.toggleStartStop = function(){
    if(recognizing){
      recognition.stop();
      reset();
    }else {
      recognition.lang = "da-DK";
      recognition.start();
      recognizing = true;
      speechToggle.src = "assets/images/stopButton.png";
      speechInput.value = "";
      speechInput.placeholder = "";
    }
  };
  return speechFactory;
});
