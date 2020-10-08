class BeertechVideo {
  sources: HTMLSourceElement[] = [];
  constructor(
    private width: number = 320,
    private height: number = 240,
    private supportMessage: string = "Your browser does not support the video tag.",
    private controls: boolean = true
  ) {}

  getVideoCreated() {
    return this;
  }

  setSources(sources: Source[]) {
    this.sources = sources.map(
      (source: Source): HTMLSourceElement => {
        const sourceTag = document.createElement("source");
        sourceTag.src = source.src;
        sourceTag.type = source.type;
        return sourceTag;
      }
    );
  }

  setVideo(videoElement: HTMLElement) {
    const videoTag = document.createElement("video");
    videoTag.width = this.width;
    videoTag.height = this.height;
    videoTag.innerHTML = this.supportMessage;
    videoTag.controls = this.controls;
    this.sources.forEach((source: HTMLSourceElement) => videoTag.appendChild(source));
    return videoTag;
  }

  render(videoElement: HTMLElement) {
    const tagVideo = this.setVideo(videoElement);
    return videoElement.appendChild(tagVideo);
  }
}

export default BeertechVideo;
