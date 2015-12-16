var dojo = angular.module('dojo');

dojo.factory('speechRec', function(){
  var speechFactory = {};
  var recognizing = false;

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  reset = function(){
    recognizing = false;
    speechToggleConvo.src = "assets/images/recordButton.png";
    speechToggleProd.src = "assets/images/recordButton.png";
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
      speechInputConvo.value = 'jeg';
      speechInputProd.value = 'jeg';
    }else if(final === 'r'){
      speechInputConvo.value = 'er';
      speechInputProd.value = 'er';
    }else if(final === 'youtube'){
      speechInputConvo.value = 'du';
      speechInputProd.value = 'du';
    }else{
      speechInputConvo.value = final;
      speechInputProd.value = final;
    }
    speechInputConvo.placeholder = interim;
    speechInputProd.placeholder = interim;
  };

  speechFactory.toggleStartStop = function(){
    if(recognizing){
      recognition.stop();
      reset();
    }else {
      recognition.lang = "da-DK";
      recognition.start();
      recognizing = true;
      speechToggleConvo.src = "assets/images/stopButton.png";
      speechToggleProd.src = "assets/images/stopButton.png";
      speechInputConvo.value = "";
      speechInputProd.value = "";
      speechInputConvo.placeholder = "";
      speechInputProd.placeholder = "";
    }
  };
  return speechFactory;
});
