// функция подсветки
function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

// подсветка результатов поиска
export function highlightResults(query) {
  if (!query) return;

  const list = document.getElementById("js-blogArticles");

  // ищем все элементы, где нужно подсветить
  list
    .querySelectorAll(
      ".blog-card__title, .blog-card__desc, .blog-card__author, .blog-card__category",
    )
    .forEach((el) => {
      el.innerHTML = highlight(el.textContent, query);
    });
}
