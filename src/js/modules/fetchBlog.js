// fetchBlog.js или blog.js — там, где живёт initBlogList
import { renderArticle } from "../utils/utils.js";

export function initBlogList(blogs, options = { full: false }) {
  const list = document.querySelector(".blog__items");
  if (!list || !Array.isArray(blogs)) return;

  // ищем блокquote, если он есть
  const blockquote = list.querySelector(".blog__blockquote");
  const insertBeforeNode = blockquote ? blockquote.nextSibling : null;
  // const saved = blockquote.cloneNode(true);
  // Очистить контейнер, чтобы не копить карточки
  // list.innerHTML = "";

  const fragment = document.createDocumentFragment();

  blogs.forEach((blog, index) => {
    const html = renderArticle(blog, {
      full: options.full,
      isFirst: index === 0,
    }); // без параграфа
    const item = document.createElement("div");
    item.classList.add("blog__item", "js-stack-cards__item");
    item.innerHTML = html;
    fragment.appendChild(item);
  });
  // если есть blockquote → вставляем перед ним если нет → добавляем в конец списка
  if (insertBeforeNode) {
    list.insertBefore(fragment, insertBeforeNode);
  } else {
    list.appendChild(fragment);
  }
}
