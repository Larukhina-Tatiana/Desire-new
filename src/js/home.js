import "./common.js";
import { initHeroSlider, initBlogSlider } from "./modules/initSlider.js";
import { renderCollection } from "./modules/renderNewCollection.js";
import { initVideoPlayer } from "./modules/playBtn.js";
import { renderIndexArticles } from "./modules/renderIndexArticles.js";

document.addEventListener("DOMContentLoaded", async () => {
  initHeroSlider();
  renderCollection();
  await renderIndexArticles();
  initVideoPlayer();
  initBlogSlider();
});
