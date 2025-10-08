import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initGlideSlider } from "./modules/initGlideSlider.js";
import { renderCollection } from "./modules/renderNewCollection.js";
import { initBackgroundLayerAnimation } from "./modules/animateBackgroundLayer.js";
// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем функциональность бокового меню
  initRightsideMenu();
  initGlideSlider();
  renderCollection();
  transferElements();
  initBackgroundLayerAnimation();
});
