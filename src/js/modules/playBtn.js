export function initVideoPlayer() {
  document.addEventListener("click", (event) => {
    const playButton = event.target.closest(".js-play");
    const videoBox = event.target.closest(".blog-card__video-box");

    // ▶ Клик по кнопке запуска
    if (playButton && videoBox) {
      const video = videoBox.querySelector("video");
      if (video) {
        video.play();
        playButton.style.display = "none";
      }
      return;
    }

    // ⏯ Клик по самому видео
    if (videoBox && event.target.tagName === "VIDEO") {
      const video = event.target;
      const playBtn = videoBox.querySelector(".js-play");

      if (video.paused) {
        video.play();
        if (playBtn) playBtn.style.display = "none";
      } else {
        video.pause();
        if (playBtn) playBtn.style.display = "flex";
      }
    }
  });
}
