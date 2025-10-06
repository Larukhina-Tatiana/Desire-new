// Импортируем функцию инициализации бокового меню из соответствующего модуля
import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initGlideSlider } from "./modules/initGlideSlider.js";
// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем функциональность бокового меню
  initRightsideMenu();
  initGlideSlider();

  // Здесь можно добавлять вызовы других функций инициализации модулей
  // Например:
  transferElements();
  // initSwiperSlider();
  // initGLightbox();
});
