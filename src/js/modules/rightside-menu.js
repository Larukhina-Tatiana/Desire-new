/**
 * Инициализирует функциональность бокового меню.
 * Обрабатывает открытие и закрытие бокового меню, а также переключение класса для основного меню.
 */
export function initRightsideMenu() {
  // Получаем ссылки на DOM-элементы
  const headerBtn = document.querySelector(".header__btn");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideMenuClose = document.querySelector(".rightside-menu__close");
  const headerBtnMenu = document.querySelector(".header__btn-menu");
  const menu = document.querySelector(".menu");
  const headerInner = document.querySelector(".header__inner");

  // Проверяем, существует ли кнопка открытия бокового меню
  if (headerBtn) {
    // Обработчик клика для открытия бокового меню
    headerBtn.addEventListener("click", () => {
      if (rightsideMenu) {
        rightsideMenu.classList.remove("rightside-menu--close");
      }
    });

    // Обработчик клика для закрытия бокового меню
    if (rightsideMenuClose) {
      rightsideMenuClose.addEventListener("click", () => {
        if (rightsideMenu) {
          rightsideMenu.classList.add("rightside-menu--close");
        }
      });
    }
  }

  // Обработчики для кнопки меню (гамбургера)
  if (headerBtnMenu) {
    // Переключение класса для основного меню
    headerBtnMenu.addEventListener("click", () => {
      if (menu) {
        menu.classList.toggle("menu--open");
      }
    });

    // Переключение класса для внутреннего контейнера хедера
    headerBtnMenu.addEventListener("click", () => {
      if (headerInner) {
        headerInner.classList.toggle("header__inner-btn--open");
      }
    });
  }
}
