import { fetchBlogPosts } from "../utils/utils.js";
import { initBlogList } from "../modules/fetchBlog.js";
import { asideBtn, toggleAside } from "../modules/asideBtn.js";
import { highlightResults } from "../modules/highLightResults.js";

export async function initBlogSearch() {
  let blogs = [];
  const input = document.getElementById("search-input");
  const list = document.getElementById("js-blogArticles");
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("searchClear");

  const resultsInfo = document.getElementById("js-searchResults");

  try {
    blogs = await fetchBlogPosts(); // загружаем статьи
    initBlogList(blogs, { full: false }); // показываем все статьи по умолчанию
  } catch (error) {
    list.innerHTML = "<li class='blog__item'>Ошибка загрузки статей 😢</li>";
    console.error("Ошибка при загрузке:", error);
    return;
  }

  // 🔑 debounce для live search
  let debounceTimer;
  const debounce = (callback, delay = 300) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callback, delay);
  };

  input.addEventListener("input", () => {
    debounce(() => {
      const query = input.value.trim().toLowerCase();
      // console.log("query", query);

      searchBtn.classList.toggle("hidden", query.length > 0);
      clearBtn.classList.toggle("hidden", query.length === 0);
      // 1️⃣ если поле пустое → показываем все статьи
      if (!query) {
        list.innerHTML = "";
        resultsInfo.textContent = ``;
        initBlogList(blogs, { full: false });
        return;
      }

      // 2️⃣ фильтрация по title, description, author, category
      const results = blogs.filter((blog) =>
        [blog.title, blog.description, blog.author, blog.category].some(
          (field) => field.toLowerCase().includes(query),
        ),
      );
      // 2️⃣ если найдено → выводим сообщение

      // list.innerHTML = ""; // очистка перед выводом

      if (results.length === 0) {
        // если ничего не найдено → выводим сообщение
        list.innerHTML =
          "<div class='blog__item' aria-live='polite'> Ничего не найдено 😢</div>";
        return;
      }

      // 4️⃣ выводим найденные статьи
      initBlogList(results, { full: true });
      // ✨ подсветка только для поиска
      highlightResults(query);
      // 5️⃣ обновляем кнопку aside
      asideBtn();
      resultsInfo.textContent = `Найдено статей: ${results.length}`;
    });
  });

  // ❌ очистка поля по кнопке
  clearBtn.addEventListener("click", () => {
    input.value = "";
    list.innerHTML = "";
    searchBtn.classList.toggle("hidden");
    clearBtn.classList.toggle("hidden");
    resultsInfo.textContent = ``;
    initBlogList(blogs, { full: false }); // возвращаем все статьи
  });
}
