class BeertechVideo {
  constructor(width, height, supportMessage) {
    this._width = width;
    this._height = height;
    this._supportMessage = supportMessage;
  }

  get videoCreated() {
    return this._videoCreated;
  }

  sources(sources) {
    return (this._sources = sources);
  }

  render(videoElement) {
    const videoCreated = setVideoTag`${this}${videoElement}`;
    this._videoCreated = videoCreated;
    return videoCreated;
  }

  play() {
    this._videoCreated.play();
  }

  pause() {
    this._videoCreated.pause();
  }
}

const setVideoTag = (...videoElement) => {
  const videoTag = document.createElement("video");
  videoTag.width = videoElement[1]._width;
  videoTag.height = videoElement[1]._height;
  videoTag.innerHTML = videoElement[1]._supportMessage;
  videoTag.id = "video";
  setSourceTag`${videoElement[1]}${videoTag}`;
  return videoElement[2].appendChild(videoTag);
};

const setSourceTag = (...sourceValues) => {
  sourceValues[1]._sources.forEach((video) => {
    const sourceTag = document.createElement("source");
    sourceTag.src = video.src;
    sourceTag.type = video.type;
    return sourceValues[2].appendChild(sourceTag);
  });
};

export default BeertechVideo;
