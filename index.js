/* Mouse Click event listener*/
for (i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var elementValue = event.target.value;
    playMusic(elementValue);
    Animation(elementValue);
  });
}
/* Keyborad Key press event listner*/
document.addEventListener("keypress", function () {
  var elementValue = event.key;
  playMusic(elementValue);
  Animation(elementValue);
});
/* function for playing sound*/
function playMusic(elementValue) {
  var musicFileName = "";
  switch (elementValue) {
    case "w":
      musicFileName = "sounds/tom-1.mp3";
      break;

    case "a":
      musicFileName = "sounds/tom-2.mp3";
      break;

    case "s":
      musicFileName = "sounds/tom-3.mp3";
      break;

    case "d":
      musicFileName = "sounds/tom-4.mp3";
      break;

    case "j":
      musicFileName = "sounds/crash.mp3";
      break;
    case "k":
      musicFileName = "sounds/snare.mp3";
      break;
    case "l":
      musicFileName = "sounds/kick-bass.mp3";
      break;
  }

  var audio = new Audio(musicFileName);
  audio.play();
}
/*function to display keypress or mouse clivk event*/
function Animation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
