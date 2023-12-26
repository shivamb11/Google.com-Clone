const body = document.querySelector("body");
const grid = document.querySelector(".grid-icon");
const gridMenu = document.querySelector(".grid-menu");
const form = document.querySelector("form");
const search = document.querySelector("#search-bar-text");
const cross = document.querySelector(".search-cross");
const mic = document.querySelector(".search-mic");
const micText = document.querySelector("#searchby-text-1");
const camera = document.querySelector(".search-lens");
const cameraText = document.querySelector("#searchby-text-2");

function getLocalStream(video, audio) {
  navigator.mediaDevices
    .getUserMedia({ video, audio })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`Error occured: ${err}`);
    });
}

grid.addEventListener("click", (e) => {
  // gridMenu.style.visibility = (gridMenu.style.visibility == 'hidden') ? 'visible' : 'hidden';
  gridMenu.classList.toggle("hide");
  e.stopPropagation();
});

body.addEventListener("click", () => {
  gridMenu.classList.add("hide");
});

search.addEventListener("input", () => {
  if (search.value != "") {
    cross.classList.remove("hide");
  }
});

cross.addEventListener("click", () => {
  search.value = "";
  cross.classList.add("hide");
});

mic.addEventListener("mouseenter", () => {
  micText.classList.remove("hide");
});

mic.addEventListener("mouseleave", () => {
  micText.classList.add("hide");
});

mic.addEventListener("click", () => {
  getLocalStream(false, true);
});

camera.addEventListener("mouseenter", () => {
  cameraText.classList.remove("hide");
});

camera.addEventListener("mouseleave", () => {
  cameraText.classList.add("hide");
});

camera.addEventListener("click", () => {
  getLocalStream(true, false);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchData = search.value;

  if (!searchData) {
    return;
  }

  location.href = `https://www.google.com/search?q=${searchData}`;
});
