const fileInput = document.getElementById("fileInput");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const audioElement = document.getElementById("audioElement");

let audioFiles;
let currentTrack = 0;

fileInput.addEventListener("change", (e) => {
  audioFiles = Array.from(e.target.files);
  loadAudio(currentTrack);
});

playBtn.addEventListener("click", () => {
  audioElement.play();
});

pauseBtn.addEventListener("click", () => {
  audioElement.pause();
});

prevBtn.addEventListener("click", () => {
  if (currentTrack === 0) {
    currentTrack = audioFiles.length - 1;
  } else {
    currentTrack--;
  }
  loadAudio(currentTrack);
});

nextBtn.addEventListener("click", () => {
  if (currentTrack === audioFiles.length - 1) {
    currentTrack = 0;
  } else {
    currentTrack++;
  }
  loadAudio(currentTrack);
});

function loadAudio(index) {
  audioElement.src = URL.createObjectURL(audioFiles[index]);
  audioElement.load();
  // audioElement.play();
}

const resetBtn = document.getElementById("resetBtn");

// eventListenerForResetButton
resetBtn.addEventListener("click", function () {
  audioElement.pause();
  audioFiles.length = 0;
  fileInput.value = "";
});
