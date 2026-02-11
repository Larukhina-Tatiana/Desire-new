// ✅ универсальная функция загрузки блогов
export async function fetchBlogPosts() {
  const url = "files/data/blog.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json(); // возвращаем массив блогов
  } catch (error) {
    console.error("❌ Не удалось загрузить блог:", error);
    return [];
  }
}

// форматирование даты
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-En", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// рендер медиа-блока (video, slider, image)
export function renderMediaBlock(blog, isFirst = false) {
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
        (src, index) => `
          <div class="swiper-slide">
            <picture class="blog-card__img-box">
              <source type="image/avif" srcset="${src}@1x.avif 1x, ${src}@2x.avif 2x">
              <source type="image/webp" srcset="${src}@1x.webp 1x, ${src}@2x.webp 2x">
              <img class="blog-card__img"
                   src="${src}"
                   ${
                     index === 0 && isFirst
                       ? 'fetchpriority="high"'
                       : 'loading="lazy"'
                   }
                   decoding="async"
                   alt="${title}">
            </picture>
          </div>`,
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

  return `
    <picture class="blog-card__img-box">
      <source type="image/avif" srcset="${image}@1x.avif 1x, ${image}@2x.avif 2x">
      <source type="image/webp" srcset="${image}@1x.webp 1x, ${image}@2x.webp 2x">
      <img class="blog-card__img"
           src="${image}"
           ${isFirst ? 'fetchpriority="high"' : 'loading="lazy"'}
           decoding="async"
           alt="${title}">
    </picture>
  `;
}

// универсальный рендер статьи/карточки
export function renderArticle(blog, options = { full: false }) {
  const { id, date, author, category, title, description } = blog;
  const mediaBlock = renderMediaBlock(blog, options.isFirst);

  const formattedDate = formatDate(date);

  // проверяем, есть ли на странице .page-blog
  const isPageHome = document.querySelector(".page-home") !== null;
  const isPageBlog = document.querySelector(".page-blog") !== null;
  // формируем класс статьи
  const articleClass = `blog-card${isPageBlog ? " animate__content" : ""}`;
  const titleBlock =
    isPageHome || isPageBlog
      ? ` <a class="blog-card__title-link" href="./blog-one.html?id=${id}" rel="noopener noreferrer nofollowall"> <h2 class="blog-card__title subtitle__fourth">${title}</h2> </a> `
      : ` <h2 class="blog-card__title subtitle__fourth">${title}</h2> `;

  return ` <article class="${articleClass}" id="${id}">
      ${mediaBlock}
      <div class="blog-card__meta">
        <time class="blog-card__data" datetime="${date}">${formattedDate}</time>
        <span>|</span>
        <a class="blog-card__author" href="#" target="_blank" rel="noopener noreferrer nofollowall">by ${author}</a>
        <span>|</span>
        <a class="blog-card__category" href="#" target="_blank" rel="noopener noreferrer nofollowall">${category}</a>
      </div>
      ${titleBlock}
      ${options.full ? `<p>${description}</p>` : ""}
    </article>
  `;
}
