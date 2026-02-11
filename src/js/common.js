import { activePage } from "./modules/activePage.js";
import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initVisibilityAnimations } from "./vendor/IntersectionObserver.js";
import { animateLinesH2 } from "./modules/animateLinesH2.js";

document.addEventListener("DOMContentLoaded", () => {
  activePage();
  initRightsideMenu();
  transferElements();
  initVisibilityAnimations();
  animateLinesH2();
});
