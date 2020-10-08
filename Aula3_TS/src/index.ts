import BeerTechVideo from "../libs/BeertecVideo";

const video = new BeerTechVideo(320, 240, "Your browser does not support the video tag.");
const videoElement = document.getElementById("beertech_player");

video.setSources([
  { src: "./assets/video.mp4", type: "video.mp4" },
  { src: "./assets/video.ogv", type: "video/ogg" },
  { src: "./assets/video.webm", type: "video/webm" },
]);
console.log("video ", video);

videoElement && video.render(videoElement);

console.log(video.getVideoCreated);
