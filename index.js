// mainJSfile

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

// songTitles

const songs = ["song-1", "song-2", "song-3"];

// keepTrackOfSongs

let songIndex = 2;

// initiallyLoadSong

loadSong(songs[songIndex]);

// updateSongDetails

function loadSong(song) {
  title.innerText = song;
  audio.src = `songs/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// functionsOnSong

// playSong

function playSong() {
  // addingSpinningAnimation
  musicContainer.classList.add("play");

  // togglingButton
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

// pauseSong

function pauseSong() {
  // stoppingSpinningAnimation
  musicContainer.classList.remove("play");

  // togglingButton
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// functionForPlayingPreviousSong

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// functionForPlayingNextSong

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// updatingProgressBar

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// setProgressBar

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// playButtonEventListener

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    // toggleToPauseButton
    pauseSong();
  } else {
    // toggleToPlayButton
    playSong();
  }
});

// changeSongsEventListener

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// goToNextAudioAfterOneEnds
audio.addEventListener("ended", nextSong);

// // Time of song
// audio.addEventListener("timeupdate", DurTime);
