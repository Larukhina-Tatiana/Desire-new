import { fetchBlogPosts } from "../utils/utils.js";
import { initBlogList } from "./fetchBlog.js";

export async function renderIndexArticles() {
  const allBlogs = await fetchBlogPosts();
  if (!allBlogs.length) return;

  const list = document.querySelector(".blog__items");
  if (!list) return;

  const sorted = allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  const topTwo = sorted.slice(0, 2);

  // Рендерим только 2 статьи. Без второго аргумента.
  initBlogList(topTwo, { full: false });

  return Promise.resolve();
}
