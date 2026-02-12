export function menu() {
  const headerBtnMenu = document.querySelector(".header__btn-menu");
  const menu = document.querySelector(".menu");
  const headerInner = document.querySelector(".header__inner");

  if (headerBtnMenu) {
    headerBtnMenu.addEventListener("click", () => {
      if (menu) menu.classList.toggle("menu--open");
      if (headerInner) headerInner.classList.toggle("header__inner-btn--open");
      document.body.classList.toggle(
        "no-scroll",
        menu.classList.contains("menu--open"),
      );
    });
  }
}
