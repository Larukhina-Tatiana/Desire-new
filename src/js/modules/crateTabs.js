// Функция для рендера табов на основе gallery.json
export function renderTabs(galleryData) {
  const tabsContainer = document.getElementById("js-tabsContainer");
  if (!tabsContainer) return;

  // Собираем все теги и приводим к нижнему регистру
  const allTags = galleryData.flatMap((item) =>
    item.tags.map((tag) => tag.toLowerCase())
  );

  // Убираем дубликаты
  const uniqueTags = ["all", ...new Set(allTags)]; // Добавляем 'all' в начало

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
    if (tag === "all") btn.classList.add("tabs-buttons__btn--active"); // Активная по умолчанию

    // Для 'all' фильтр будет '*', для остальных — '.tag-name'
    btn.dataset.filter = tag === "all" ? "*" : "." + tag.replace(/\s+/g, "-");

    // текст кнопки = сам тег (с заглавной буквы)
    btn.textContent = tag;

    li.appendChild(btn);
    fragment.appendChild(li);
  });

  // Вставляем фрагмент в <ul>
  ul.appendChild(fragment);

  // Очищаем контейнер и вставляем список
  tabsContainer.innerHTML = "";
  tabsContainer.appendChild(ul);
}

export function initTabsLogic() {
  const tabsContainer = document.getElementById("js-tabsContainer");
  if (!tabsContainer) return;

  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".tabs-buttons__btn");
    if (!btn) return;

    const filterValue = btn.dataset.filter;
    const galleryItems = document.querySelectorAll(".gallery__item");

    let visibleCount = 0;

    galleryItems.forEach((item) => {
      // Условие: должен ли элемент быть СКРЫТ
      // (если фильтр не "все" И элемент НЕ содержит нужный класс)
      const shouldHide =
        filterValue !== "*" &&
        !item.classList.contains(filterValue.substring(1));

      // Используем toggle с force-параметром:
      // true — добавить класс (скрыть), false — удалить класс (показать)
      item.classList.toggle("is-hidden", shouldHide);

      // Считаем видимые
      if (!shouldHide) visibleCount++;
    });

    // Вывод в консоль
    console.log(
      `Фильтр: [${filterValue}] | Найдено элементов: ${visibleCount}`
    );

    // Переключение активного состояния кнопок
    document
      .querySelectorAll(".tabs-buttons__btn")
      .forEach((b) => b.classList.remove("tabs-buttons__btn--active"));
    btn.classList.add("tabs-buttons__btn--active");
  });
}
