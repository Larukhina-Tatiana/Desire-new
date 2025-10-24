import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initGlideSlider } from "./modules/initGlideSlider.js";
import { renderCollection } from "./modules/renderNewCollection.js";
import { initVisibilityAnimations } from "./vendor/IntersectionObserver.js";
import { activePage } from "./modules/activePage.js";
import { updateHeartScale } from "./modules/hartVideo.js";
import { animateLinesAbout } from "./modules/animateLinesAbout.js";
import { animatePartners } from "./modules/animatePartners.js";
// import { initHeartScrollEffect } from "./modules/hartVideo.js";
// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем функциональность бокового меню
  activePage();
  initRightsideMenu();
  initGlideSlider();
  renderCollection();
  transferElements();
  initVisibilityAnimations();
  // initHeartScrollEffect("#svg", {
  //   baseSize: 100,
  //   multiplier: 2,
  //   maxSize: 400,
  // });
  updateHeartScale();
  animateLinesAbout();
  animatePartners();
});
