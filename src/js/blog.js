import "./common.js";
import { fetchBlogPosts } from "./utils/utils.js";
import { initBlogList } from "./modules/fetchBlog.js";
import { StackCards } from "./modules/animateStack.js";
import { initBlogSearch } from "./modules/initBlogSearch.js";

document.addEventListener("DOMContentLoaded", async () => {
  const blogs = await fetchBlogPosts();
  initBlogList(blogs, { full: true });

  requestAnimationFrame(() => {
    document.querySelectorAll(".js-stack-cards").forEach((el) => {
      new StackCards(el);
    });
  });

  initBlogSearch();
});
