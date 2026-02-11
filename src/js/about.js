import "./common.js";
import { updateHeartScale } from "./modules/hartVideo.js";
import { animateLinesAbout } from "./modules/animateLinesAbout.js";
import { animatePartners } from "./modules/animatePartners.js";
import { observeAndInitStack } from "./modules/observeAndInitStack.js";
import { initAboutTitleLettersAnimation } from "./modules/initAboutTitleLettersAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  updateHeartScale();
  animateLinesAbout();
  animatePartners();
  observeAndInitStack(); // анимация стека из about.html
  initAboutTitleLettersAnimation();
});
