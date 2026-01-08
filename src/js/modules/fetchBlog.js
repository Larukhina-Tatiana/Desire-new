// fetchBlog.js или blog.js — там, где живёт initBlogList
import { renderArticle } from "../utils/utils.js";

export function initBlogList(blogs, options = { full: false }) {
  const list = document.querySelector(".blog__items");
  if (!list || !Array.isArray(blogs)) return;

  // Очистить контейнер, чтобы не копить карточки
  list.innerHTML = "";

  const fragment = document.createDocumentFragment();

  blogs.forEach((blog) => {
    const html = renderArticle(blog, { full: options.full }); // без параграфа
    const item = document.createElement("div");
    item.classList.add("blog__item", "js-stack-cards__item");
    item.innerHTML = html;
    fragment.appendChild(item);
  });

  list.appendChild(fragment);
}
