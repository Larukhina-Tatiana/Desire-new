import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initHeroSlider, initBlogSlider } from "./modules/initSlider.js";
import { renderCollection } from "./modules/renderNewCollection.js";
import { initVisibilityAnimations } from "./vendor/IntersectionObserver.js";
import { activePage } from "./modules/activePage.js";
import { updateHeartScale } from "./modules/hartVideo.js";
import { animateLinesAbout } from "./modules/animateLinesAbout.js";
import { animatePartners } from "./modules/animatePartners.js";

// import { fetchFurnitureArticles } from "./api/FurnitureAPI.js";
// import { renderBlogCard } from "./modules/BlogCard.js";
import { fetchBlogPosts, createArticle } from "./modules/fetchBlog.js";
import { initVideoPlayer } from "./modules/playBtn.js";

if (document.body.classList.contains("page-home")) {
  // Дожидаемся полной загрузки DOM перед инициализацией скриптов
  document.addEventListener("DOMContentLoaded", () => {
    // Инициализируем функциональность бокового меню
    activePage();
    initRightsideMenu();
    initHeroSlider();
    renderCollection();
    transferElements();
    initVisibilityAnimations();
  });
}

if (document.body.classList.contains("page-about")) {
  // Дожидаемся полной загрузки DOM перед инициализацией скриптов
  document.addEventListener("DOMContentLoaded", () => {
    // Инициализируем функциональность бокового меню
    activePage();
    initRightsideMenu();
    renderCollection();
    transferElements();
    initVisibilityAnimations();
    updateHeartScale();
    animateLinesAbout();
    animatePartners();
  });
}
// Выполняем только на странице blog.html

if (document.body.classList.contains("page-blog")) {
  document.addEventListener("DOMContentLoaded", async () => {
    activePage();
    initRightsideMenu();
    transferElements();
    const blogs = await fetchBlogPosts(); // ✅ получаем массив
    createArticle(blogs); // ✅ отрисовываем первую порцию
    initVideoPlayer(); // ✅ активируем обработчик кнопки ▶
    initBlogSlider();
  });
}
