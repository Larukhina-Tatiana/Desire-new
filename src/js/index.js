// Импортируем функцию инициализации бокового меню из соответствующего модуля
import { initRightsideMenu } from "./modules/rightside-menu.js";

// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем функциональность бокового меню
  initRightsideMenu();

  // Здесь можно добавлять вызовы других функций инициализации модулей
  // Например:
  // initSwiperSlider();
  // initGLightbox();
});
// import "./modules/slider.js";
// import "./modules/slogan.js";
// import { initProjectRenderer } from "./modules/renderProjects.js";
// import "./modules/tabs.js";
