function changeImage1() {
  var twitch1ID = document.getElementById("twitch1");
  if (
    twitch1ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/TwitchGlitchWhite.png"
  ) {
    twitch1ID.src = "assets/img/sykkuno.jpeg";
  } else {
    twitch1ID.src = "assets/img/TwitchGlitchWhite.png";
  }
}
function changeImage2() {
  var twitch2ID = document.getElementById("twitch2");
  if (
    twitch2ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/TwitchGlitchWhite.png"
  ) {
    twitch2ID.src = "assets/img/tyler1.png";
  } else {
    twitch2ID.src = "assets/img/TwitchGlitchWhite.png";
  }
}
function changeImage3() {
  var twitch3ID = document.getElementById("twitch3");
  if (
    twitch3ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/TwitchGlitchWhite.png"
  ) {
    twitch3ID.src = "assets/img/pokimane.png";
  } else {
    twitch3ID.src = "assets/img/TwitchGlitchWhite.png";
  }
}

function changeImage4() {
  var twitch4ID = document.getElementById("twitch4");
  if (
    twitch4ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/youtube.png"
  ) {
    twitch4ID.src = "assets/img/dream.jpg";
  } else {
    twitch4ID.src = "assets/img/youtube.png";
  }
}
function changeImage5() {
  var twitch5ID = document.getElementById("twitch5");
  if (
    twitch5ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/youtube.png"
  ) {
    twitch5ID.src = "assets/img/hyram.jpg";
  } else {
    twitch5ID.src = "assets/img/youtube.png";
  }
}
function changeImage6() {
  var twitch6ID = document.getElementById("twitch6");
  if (
    twitch6ID.src ==
    "file:///C:/Users/thoma/Desktop/WDD%20Final/assets/img/youtube.png"
  ) {
    twitch6ID.src = "assets/img/TryGuys.jpg";
  } else {
    twitch6ID.src = "assets/img/youtube.png";
  }
}

if (document.getElementById("toggle-button1") != null) {
  document.getElementById("toggle-button1").onclick = changeImage1;
  document.getElementById("toggle-button2").onclick = changeImage2;
  document.getElementById("toggle-button3").onclick = changeImage3;
}
if (document.getElementById("toggle-button4") != null) {
  document.getElementById("toggle-button4").onclick = changeImage4;
  document.getElementById("toggle-button5").onclick = changeImage5;
  document.getElementById("toggle-button6").onclick = changeImage6;
}
