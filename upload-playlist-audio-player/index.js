const fileInput = document.querySelector("#file-input");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const audioPlayer = document.querySelector("#audio-player");
const resetButton = document.querySelector("#reset-button");

let context = new (window.AudioContext || window.webkitAudioContext)();
let source = null;

// EventListenerForCapturingFileChange
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const fileURL = URL.createObjectURL(file);

  // settingAudioSource
  audioPlayer.src = fileURL;
});

// eventListenerForPlayButton
playButton.addEventListener("click", function () {
  audioPlayer.play();
});

// eventListenerForPauseButton
pauseButton.addEventListener("click", function () {
  audioPlayer.pause();
});

// eventListenerForResetButton
resetButton.addEventListener("click", function () {
  fileInput.value = "";
});
