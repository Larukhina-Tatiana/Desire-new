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

import { renderIndexArticles } from "./modules/renderIndexArticles.js"; // ✅ отрисовка статей блога на главной

import {
  // initAnimateStackWAAPI,
  // StackAnimator,
  // initAnimateStackWAAPI,
  // initCardReveal,
  StackCards,
} from "./modules/animateStack.js"; // скролл  статей блога на blog.html
import { observeAndInitStack } from "./modules/observeAndInitStack.js";

// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", async () => {
  const body = document.body;
  // для всех страниц
  activePage();
  initRightsideMenu();
  transferElements();
  initVisibilityAnimations();

  if (body.classList.contains("page-home")) {
    initHeroSlider();
    renderCollection();
    await renderIndexArticles(); // ✅ дожидаемся вставки .blog-slider
    initVideoPlayer(); // ✅ активируем обработчик кнопки ▶
    initBlogSlider();
  }

  if (document.body.classList.contains("page-about")) {
    renderCollection();
    updateHeartScale();
    animateLinesAbout();
    animatePartners();
  }

  // Выполняем только на странице blog.html
  if (document.body.classList.contains("page-blog")) {
    const blogs = await fetchBlogPosts(); // ✅ получаем массив

    createArticle(blogs, { showExcerpt: true }); // ✅ с описанием
    requestAnimationFrame(() => {
      initVideoPlayer(); // ▶ активируем видео
      initBlogSlider(); // ⬅➡ слайдер
      // StackAnimator();
      // const stacks = document.querySelectorAll(".js-stack-cards");
      // stacks.forEach((el) => {
      //   new StackCards(el, {
      //     marginY: 24,
      //     scaleFactor: 0.05,
      //     minScale: 0.85,
      //     invertScale: true, // <- включаем инвертированное поведение
      //     maxGrow: 0.9, // <- максимальный рост (например, +12%)
      //   });
      // });
      // const stacks = document.querySelectorAll(".js-stack-cards");
      // stacks.forEach((el) => new StackCards(el));
      // initAnimateStackWAAPI();
      // initCardReveal(); // автоматическая инициализация при появлении карточек
      document.querySelectorAll(".js-stack-cards").forEach((el) => {
        new StackCards(el);
      });
    });
  }
});
