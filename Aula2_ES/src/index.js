import BeerTechVideo from "./libs/BeertecVideo";

const video = new BeerTechVideo(320, 240, "Your browser does not support the video tag.");
const videoElement = document.getElementById("beertech_player");
const playVideo = document.getElementById("play_video");

video.sources([
  { src: "./assets/video.mp4", type: "video.mp4" },
  { src: "./assets/video.ogv", type: "video/ogg" },
  { src: "./assets/video.webm", type: "video/webm" },
]);

video.render(videoElement);

playVideo.addEventListener("click", (clickEvent) => {
  if (video.videoCreated.paused) video.play();
  else video.pause();
});

console.log(video.videoCreated);
