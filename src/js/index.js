import { initRightsideMenu } from "./modules/rightside-menu.js";
import { transferElements } from "./modules/transfer.js";
import { initHeroSlider, initBlogSlider } from "./modules/initSlider.js";
import { renderCollection } from "./modules/renderNewCollection.js";
import { initVisibilityAnimations } from "./vendor/IntersectionObserver.js";
import { activePage } from "./modules/activePage.js";
import { updateHeartScale } from "./modules/hartVideo.js";
import { animateLinesH2 } from "./modules/animateLinesH2.js";
import { animateLinesAbout } from "./modules/animateLinesAbout.js";
import { animatePartners } from "./modules/animatePartners.js";
import { asideBtn } from "./modules/asideBtn.js";
import { initVideoPlayer } from "./modules/playBtn.js";
// import { fetchFurnitureArticles } from "./api/FurnitureAPI.js";

import {
  // initAnimateStackWAAPI,
  // StackAnimator,
  // initAnimateStackWAAPI,
  // initCardReveal,
  StackCards,
} from "./modules/animateStack.js"; // скролл  статей блога на blog.html

import { observeAndInitStack } from "./modules/observeAndInitStack.js";

import { fetchBlogPosts } from "./utils/utils.js";
import { initBlogList } from "./modules/fetchBlog.js";

import { renderIndexArticles } from "./modules/renderIndexArticles.js"; // ✅ отрисовка статей блога на главной
import { renderSingleArticle } from "./modules/renderSingleArticle.js"; // ✅ отрисовка статей блога на странице одной статьи

import { fetchGallery, renderGallery } from "./modules/renderGallery.js";
import animateGalleyCard from "./modules/animateGalleyCard.js";
import { renderTabs, initTabsLogic } from "./modules/crateTabs.js";
import { initGallery3d } from "./modules/initGallery3d.js";

// Дожидаемся полной загрузки DOM перед инициализацией скриптов
document.addEventListener("DOMContentLoaded", async () => {
  const body = document.body;
  // для всех страниц
  activePage();
  initRightsideMenu();
  transferElements();
  initVisibilityAnimations();
  animateLinesH2();

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
    const blogs = await fetchBlogPosts();
    initBlogList(blogs, { full: true }); // все статьи
    requestAnimationFrame(() => {
      document.querySelectorAll(".js-stack-cards").forEach((el) => {
        new StackCards(el);
      });
    });
    initVideoPlayer(); // если статья с видео
    initBlogSlider(); // если статья со слайдером
    asideBtn();
  }
  // Выполняем только на странице blog-one.html
  if (document.body.classList.contains("page-blog-one")) {
    await renderSingleArticle();
    requestAnimationFrame(() => {
      initVideoPlayer(); // если статья с видео
      initBlogSlider(); // если статья со слайдером
    });
    asideBtn();
  }
  if (document.body.classList.contains("page-gallery")) {
    const galleryData = await fetchGallery();
    renderTabs(galleryData); // Рисуем табы
    renderGallery(galleryData); // Рисуем галерею
    initTabsLogic(); // Включаем связь между ними
    animateGalleyCard();
  }
  if (document.body.classList.contains("page-contacts")) {
    initGallery3d();
  }
});
