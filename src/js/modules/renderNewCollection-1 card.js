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
  console.log("Отфильтрованные:", newCollections);

  const fragment = document.createDocumentFragment();

  newCollections.forEach((item) => {
    // Получаем HTML-разметку для тегов
    const tagsHtml = createTagsHtml(item.tags);

    // 3. Используем Template Literal для создания всей структуры элемента
    const html = `
            <li class="collection__item">
                <article class="collection__item-wrapper" id="collection-${
                  item.id
                }"  aria-labelledby="collection-title-${item.id}">
                    
                    <picture>
                        <source type="image/avif" srcset="${
                          item.image.src
                        }@1x.avif 1x, ${item.image.src}@2x.avif 2x">
                        <source type="image/webp" srcset="${
                          item.image.src
                        }@1x.webp 1x, ${item.image.src}@2x.webp 2x">
                        <img class="collection__img"
                             src="${item.image.src}@1x.jpg"
                             alt="${
                               item.image.alt?.[lang] ?? "Collection image"
                             }"
                             loading="lazy"
                             decoding="async">
                    </picture>
                    
                    <div class="collection__info">
                        <h3 class="collection__info-title" id="collection-title-${
                          item.id
                        }">
                            <a class="collection__info-link"
                               href="${item.link?.url ?? "#"}"
                               aria-label="${
                                 item.link?.ariaLabel?.[lang] ?? ""
                               }">
                                ${item.title?.[lang] ?? "Untitled"}
                            </a>
                        </h3>
                        <ul class="tags" aria-label="Categories">
                            ${tagsHtml}
                        </ul>
                    </div>
                </article>
                
            </li>
        `;

    // 4. Парсим HTML-строку и добавляем в DocumentFragment
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html.trim(); // .trim() для чистоты

    // Добавляем только сам <li> элемент
    fragment.appendChild(tempDiv.firstChild);
  });

  // 5. Однократная вставка DocumentFragment в DOM (самая быстрая операция)
  list.appendChild(fragment);
}
