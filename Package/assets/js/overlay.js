$(document).ready(function () {
  var player = $('#inOverlay1')[0];
  var player2 = $('#inOverlay2')[0];
  var player3 = $('#inOverlay3')[0];
  var player4 = $('#inOverlay4')[0];
  var player5 = $('#inOverlay5')[0];
  var player6 = $('#inOverlay6')[0];
  $f(player).addEvent('ready', ready); 
  $f(player2).addEvent('ready', ready); 
  $f(player3).addEvent('ready', ready); 
  $f(player4).addEvent('ready', ready); 
  $f(player5).addEvent('ready', ready); 
  $f(player6).addEvent('ready', ready); 
  
  
  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    }
    else {
      element.attachEvent(eventName, callback, false);
    }
  }

  function ready(player_id) {
    var froogaloop = $f(player_id);

    function onFinish() {
      froogaloop.addEvent('finish', function(data) {
          toggleOverlay(player_id);
      });
    }
    onFinish();
  }

});

function toggleOverlay(playerid){
   $("#" + playerid).parent("#specialBox").parent().css("opacity",".95");
   $("#" + playerid).parent("#specialBox").parent().toggle();
   $("#" + playerid).parent("#specialBox").toggle();
}

function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.color = "green";
}

