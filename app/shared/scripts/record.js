$(document).ready(function(){
  $(document).on("click", "#record:not(.disabled)", function(){
    elem = $(this);
    Fr.voice.record($("#live").is(":checked"), function(){
      elem.addClass("hidden");
      $("#stop").removeClass("hidden");
    });
  });
    
  $(document).on("click", "#record2:not(.disabled)", function(){
    elem = $(this);
    Fr.voice.record($("#live").is(":checked"), function(){
      elem.addClass("hidden");
      $("#stop").removeClass("hidden");
      $("#play").addClass("hidden");
    });
  });
  
  $(document).on("click", "#stop:not(.disabled)", function(){
    Fr.voice.export(function(url){
      $("#audio").attr("src", url);
    }, "URL");
    Fr.voice.stop();
    elem = $(this);
    $("#record2").removeClass("hidden");
    $("#play").removeClass("hidden");
    elem.addClass("hidden");
  });
    
  $(document).on("click", "#play:not(.disabled)", function(){
      $("#audio").trigger("play");
  });
});
