export function activePage() {
  document.querySelectorAll(".menu__link").forEach((link) => {
    const currentPath = window.location.pathname;
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current"); // на случай перехода
    }
  });
}
