import { fetchBlogPosts, renderArticle } from "../utils/utils.js";

export async function renderSingleArticle() {
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get("id"));
  const container = document.getElementById("js-blogArticle");

  if (!container) return;

  if (!articleId) {
    container.innerHTML = `<p>Некорректный id статьи</p>`;
    return;
  }

  try {
    const blogs = await fetchBlogPosts();
    const article = blogs.find((item) => item.id === articleId);

    if (article) {
      container.innerHTML = renderArticle(article, { full: true });
    } else {
      container.innerHTML = `<p>Статья не найдена 😢</p>`;
    }
  } catch (err) {
    console.error("Ошибка загрузки:", err);
    container.innerHTML = `<p>Не удалось загрузить статью</p>`;
  }
}
