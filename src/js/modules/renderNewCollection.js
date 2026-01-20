import { fetchCollection } from "./fetchCollection.js";

/**
 * Создает HTML-разметку для списка тегов.
 * @param {Array<string>} tags - Массив тегов.
 * @param {string} lang - Текущий язык.
 * @returns {string} HTML-строка с тегами.
 */
function createTagsHtml(tags) {
  return tags
    .map(
      (tag) => `
        <li class="tags__item">
            <a class="tags__link" href="/category/${tag
              .toLowerCase()
              .replace(/\s+/g, "-")}">
                ${tag}
            </a>
        </li>
    `
    )
    .join("");
}

/**
 * Асинхронно получает данные коллекции и рендерит их в DOM.
 * Использует шаблонные строки для оптимизации создания элементов и DocumentFragment для однократной вставки.
 * @param {string} [lang="en"] - Язык для отображения текстов (title, alt, aria-label).
 */
export async function renderCollection(lang = "en") {
  const list = document.querySelector(".collection");
  // 1. Проверка наличия контейнера
  if (!list) {
    console.error("Контейнер .collection не найден.");
    return;
  }

  // Предварительная очистка списка
  list.innerHTML = "";

  // 2. Получение данных и базовая проверка
  const data = await fetchCollection();
  if (!data || data.length === 0) {
    // Здесь можно добавить логику для отображения сообщения "Нет элементов"
    console.warn("Нет элементов для отображения");
    return [];
  }
  const newCollections = data.filter((item) => item.type === "newCollection");
  // console.log("Отфильтрованные:", newCollections);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < newCollections.length; i += 2) {
    const group = newCollections.slice(i, i + 2); // берём по два

    const articlesHtml = group
      .map((item) => {
        const tagsHtml = createTagsHtml(item.tags);

        return `
        <div class="collection__slide slide">
      <article class="collection__card card" id="card-${
        item.id
      }" aria-labelledby="card-title-${item.id}">
        <picture>
          <source type="image/avif" srcset="${item.image.src}@1x.avif 1x, ${
          item.image.src
        }@2x.avif 2x">
          <source type="image/webp" srcset="${item.image.src}@1x.webp 1x, ${
          item.image.src
        }@2x.webp 2x">
          <img class="card__img"
               src="${item.image.src}@1x.jpg"
               alt="${item.image.alt?.[lang] ?? "Card image"}"
               loading="lazy"
               decoding="async">
        </picture>
        <div class="card__info">
          <h3 class="card__info-title" id="card-title-${item.id}">
            <a class="card__info-link"
               href="${item.link?.url ?? "#"}"
               aria-label="${item.link?.ariaLabel?.[lang] ?? ""}">
              ${item.title?.[lang] ?? "Untitled"}
            </a>
          </h3>
          <ul class="tags" aria-label="Categories">
            ${tagsHtml}
          </ul>
        </div>
      </article>
              </div>
    `;
      })
      .join("");

    const li = document.createElement("li");
    li.className = "collection__item ";
    li.innerHTML = articlesHtml;

    fragment.appendChild(li);
  }

  list.appendChild(fragment);
}
