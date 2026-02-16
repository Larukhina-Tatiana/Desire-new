import "./common.js";
import { renderSingleArticle } from "./modules/renderSingleArticle.js";
import { initVideoPlayer } from "./modules/playBtn.js";
import { initBlogSlider } from "./modules/initSlider.js";

import initCommentsForm from "./modules/comments-form.js";

document.addEventListener("DOMContentLoaded", async () => {
  await renderSingleArticle();

  requestAnimationFrame(() => {
    initVideoPlayer();
    initBlogSlider();
  });

  initCommentsForm();
});
