let blogs = [];
let currentStep = 1; // Начинаем с 1, так как первая порция загружается при инициализации
const BATCH_SIZE = 3; // Количество блогов, загружаемых за один раз

export async function fetchBlogPosts() {
  const url = "files/data/blog.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json(); // ✅ просто возвращаем массив
  } catch (error) {
    console.error("❌ Не удалось загрузить блог:", error);
    return [];
  }
}

export function createArticle(blogs, { showExcerpt = true } = {}) {
  console.log(" showExcerpt", showExcerpt);

  const list = document.querySelector(".blog");
  if (!list) return;

  const fragment = document.createDocumentFragment();

  blogs.forEach((blog) => {
    const { id, date, author, category, title, description } = blog;
    const item = document.createElement("div");
    item.classList.add("blog__item", "js-stack-cards__item");

    const formattedDate = new Date(date).toLocaleDateString("en-En", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const mediaBlock = renderMediaBlock(blog);

    item.innerHTML = `
    <article class="blog-card animate__content" id="${id}">
      ${mediaBlock}
      <div class="blog-card__meta">
        <time class="blog-card__data" datetime="${date}">${formattedDate}</time>
        <span>|</span>
        <a class="blog-card__author" href="#">by ${author}</a>
        <span>|</span>
        <a class="blog-card__category" href="#">${category}</a>
      </div>
      <a class="blog-card__title-link" href="./blog-one.html">
        <h3 class="blog-card__title subtitle__fourth">${title}</h3>
      </a>
    ${showExcerpt ? `<p class="blog-card__excerpt">${description}</p>` : ""}
    </article>
    `;

    fragment.appendChild(item);
  });

  list.appendChild(fragment);
}

function renderMediaBlock(blog) {
  const { type, image, title, video } = blog;

  if (type === "video") {
    return `
      <div class="blog-card__video-box">
        <video class="blog-card__video" poster="${image}@1x.jpg" preload="none">
          <source src="${video}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button class="blog-card__play-button js-play" type="button" aria-label="Play video">
          <svg width="42" height="42">
            <use href="#play-btn"></use>
          </svg>
        </button>
      </div>
    `;
  }

  if (type === "slider" && Array.isArray(image)) {
    const slides = image
      .map(
        (src) => `
        <div class="swiper-slide">
        <picture class="blog-card__img-box">
          <source type="image/avif" srcset="${src}@1x.avif 1x, ${src}@2x.avif 2x">
          <source type="image/webp" srcset="${src}@1x.webp 1x, ${src}@2x.webp 2x">
          <img class="blog-card__img" src="${src}" loading="lazy" decoding="async" alt="${title}">
    </picture>
        </div>`
      )
      .join("");

    return `
      <div class="swiper blog-slider">
        <div class="swiper-wrapper blog-slider__box">
          ${slides}
        </div>
        <button type="button" class="blog-slider__arrow blog-slider__arrow--next">
          <svg class="blog-slider__svg"><use href="#next"></use></svg>
        </button>
        <button type="button" class="blog-slider__arrow blog-slider__arrow--prev">
          <svg class="blog-slider__svg"><use href="#prev"></use></svg>
        </button>
      </div>
    `;
  }

  // default: image
  return `
    <picture class="blog-card__img-box">
      <source type="image/avif" srcset="${image}@1x.avif 1x, ${image}@2x.avif 2x">
      <source type="image/webp" srcset="${image}@1x.webp 1x, ${image}@2x.webp 2x">
      <img class="blog-card__img" src="${image}" loading="lazy" decoding="async" alt="${title}">
    </picture>
  `;
}
