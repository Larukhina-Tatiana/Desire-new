import { fetchBlogPosts } from "../utils/utils.js";
import { initBlogList } from "../modules/fetchBlog.js";
import { asideBtn, toggleAside } from "../modules/asideBtn.js";

export async function initBlogSearch() {
  const blogs = await fetchBlogPosts(); // загружаем статьи
  const form = document.querySelector(".aside__search");
  const input = document.getElementById("aside-search");
  const list = document.getElementById("js-blogArticles");
  const asideButton = document.getElementById("js-asideBtn"); // сам aside
  // const aside = document.querySelector(".aside"); // сам aside
  // const headerInner = document.querySelector(".header__inner");
  // const body = document.body;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    if (!query) {
      // если пустой запрос → показываем все статьи
      initBlogList(blogs, { full: false });
      return;
    }

    // фильтрация по title, description, author, category
    const results = blogs.filter((blog) =>
      [blog.title, blog.description, blog.author, blog.category].some((field) =>
        field.toLowerCase().includes(query),
      ),
    );
    console.log("result", results);

    if (results.length === 0) {
      const list = document.querySelector(".blog__items");
      list.innerHTML = "<li class='blog__item'>Ничего не найдено 😢</li>";
      // aside.classList.toggle("open");
      // asideBtn.classList.toggle("open");
      return;
    }
    list.innerHTML = "";

    if (asideButton.classList.contains("open")) {
      toggleAside();
      // asideButton.classList.toggle("open");
      // aside.classList.toggle("open");
      // headerInner.classList.toggle("hidden");
      // body.classList.toggle("no-scroll");
    }

    // ✅ выводим через initBlogList
    console.log("Найдено", results.length);
    initBlogList(results, { full: true });
    asideBtn();
  });
}
