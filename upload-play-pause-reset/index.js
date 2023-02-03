const fileInput = document.querySelector("#file-input");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const audioPlayer = document.querySelector("#audio-player");
const resetButton = document.querySelector("#reset-button");

let context = new (window.AudioContext || window.webkitAudioContext)();
let source = null;

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const fileURL = URL.createObjectURL(file);
  audioPlayer.src = fileURL;
});

playButton.addEventListener("click", function () {
  audioPlayer.play();
});

pauseButton.addEventListener("click", function () {
  audioPlayer.pause();
});

resetButton.addEventListener("click", function () {
  fileInput.value = "";
});
