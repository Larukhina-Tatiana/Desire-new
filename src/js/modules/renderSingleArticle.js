import { fetchBlogPosts, renderArticle } from "../utils/utils.js";
import { initVideoPlayer } from "./playBtn.js";
import { initBlogSlider } from "./initSlider.js";

let blogs = [];

export async function renderSingleArticle() {
  blogs = await fetchBlogPosts();
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get("id"));
  renderArticleById(articleId);
}

function renderArticleById(articleId) {
  const container = document.getElementById("js-blogArticle");
  const sliderContainer = document.getElementById("js-blogSlider");

  const articleIndex = blogs.findIndex((item) => item.id === articleId);
  if (articleIndex === -1) {
    container.innerHTML = `<p>Статья не найдена 😢</p>`;
    return;
  }

  const article = blogs[articleIndex];

  // плавное исчезновение
  container.classList.add("fade-out");

  setTimeout(() => {
    // рендерим статью
    container.innerHTML = renderArticle(article, { full: true });

    // обновляем URL
    history.pushState({}, "", `./blog-one.html?id=${articleId}`);

    // плавное появление
    container.classList.remove("fade-out");
    container.classList.add("fade-in");

    // prev/next циклически
    const prevIndex = (articleIndex - 1 + blogs.length) % blogs.length;
    const nextIndex = (articleIndex + 1) % blogs.length;

    const prevArticle = blogs[prevIndex];
    const nextArticle = blogs[nextIndex];

    sliderContainer.innerHTML = `
      <button class="blog__single-arrow blog__single-arrow--prev" data-id="${prevArticle.id}">
        <div class="blog__single-arrow-container">
          <svg class="blog__single-svg">
            <use href="#slider-prev"></use>
          </svg>
          <span>prev</span>
        </div>
        ${prevArticle.title}
      </button>
      <button class="blog__single-arrow blog__single-arrow--next" data-id="${nextArticle.id}">
        ${nextArticle.title}
        <div class="blog__single-arrow-container">
          <svg class="blog__single-svg">
            <use href="#slider-next"></use>
          </svg>
          <span>next</span>
        </div>
      </button>
    `;

    // обработчики стрелок
    sliderContainer.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.getAttribute("data-id"));
        renderArticleById(id); // без перезагрузки
      });
    });

    // ✅ инициализация плагинов после вставки статьи
    initVideoPlayer();
    initBlogSlider();
  }, 400); // совпадает с CSS transition
}

// поддержка кнопки "Назад" в браузере
window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get("id"));
  renderArticleById(articleId);
});
