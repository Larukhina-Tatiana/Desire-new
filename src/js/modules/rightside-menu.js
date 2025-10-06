export function initRightsideMenu() {
  const headerBtn = document.querySelector(".header__btn");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideMenuClose = document.querySelector(".rightside-menu__close");
  const headerBtnMenu = document.querySelector(".header__btn-menu");
  const menu = document.querySelector(".menu");
  const headerInner = document.querySelector(".header__inner");

  function openMenu() {
    if (rightsideMenu) {
      rightsideMenu.classList.remove("rightside-menu--close");
      headerBtn.setAttribute("aria-expanded", "true");
      rightsideMenu.focus(); // если есть tabindex="-1"
    }
  }

  function closeMenu() {
    if (rightsideMenu) {
      rightsideMenu.classList.add("rightside-menu--close");
      headerBtn.setAttribute("aria-expanded", "false");
    }
  }

  if (headerBtn) {
    headerBtn.addEventListener("click", openMenu);

    // ✅ Добавляем доступность: клавиатурный доступ
    headerBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
    });
  }

  if (rightsideMenuClose) {
    rightsideMenuClose.addEventListener("click", closeMenu);
  }

  if (headerBtnMenu) {
    headerBtnMenu.addEventListener("click", () => {
      if (menu) menu.classList.toggle("menu--open");
      if (headerInner) headerInner.classList.toggle("header__inner-btn--open");
    });
  }
}
