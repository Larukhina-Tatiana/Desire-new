export function initRightsideMenu() {
  const headerBtn = document.querySelector(".header__btn");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideMenuClose = document.querySelector(".rightside-menu__close");

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  const toggleMenu = (open) => {
    if (!rightsideMenu || !headerBtn) return;

    rightsideMenu.classList.toggle("rightside-menu--close", !open);
    headerBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  headerBtn?.addEventListener("click", () => toggleMenu(true));
  rightsideMenuClose?.addEventListener("click", () => toggleMenu(false));
}
