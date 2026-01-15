// Функция для рендера табов на основе gallery.json
export function renderTabs(galleryData) {
  const tabsContainer = document.getElementById("js-tabsContainer");
  if (!tabsContainer) return;

  // Собираем все теги и приводим к нижнему регистру
  const allTags = galleryData.flatMap((item) =>
    item.tags.map((tag) => tag.toLowerCase())
  );

  // Убираем дубликаты
  const uniqueTags = [...new Set(allTags)];

  // Создаём <ul>
  const ul = document.createElement("ul");
  ul.className = "tabs-buttons";

  // Создаём фрагмент
  const fragment = document.createDocumentFragment();

  uniqueTags.forEach((tag) => {
    const li = document.createElement("li");
    li.className = "tabs-buttons__item";

    const btn = document.createElement("button");
    btn.className = "tabs-buttons__btn";

    // data-filter формируем напрямую из тега
    btn.dataset.filter = "." + tag.replace(/\s+/g, "-");

    // текст кнопки = сам тег (с заглавной буквы)
    btn.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);

    li.appendChild(btn);
    fragment.appendChild(li);
  });

  // Вставляем фрагмент в <ul>
  ul.appendChild(fragment);

  // Очищаем контейнер и вставляем список
  tabsContainer.innerHTML = "";
  tabsContainer.appendChild(ul);
}
