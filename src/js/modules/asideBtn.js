export function toggleAside() {
  const asideButton = document.getElementById("js-asideBtn");
  const aside = document.querySelector(".aside");
  const body = document.body;
  const headerInner = document.querySelector(".header__inner");

  if (asideButton) {
    asideButton.classList.toggle("open");
    aside.classList.toggle("open");
    headerInner.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  }
}

export function asideBtn() {
  const asideButton = document.getElementById("js-asideBtn");
  if (asideButton) {
    asideButton.addEventListener("click", toggleAside);
  }

  // asideBtn.addEventListener("keydown", (e) => {
  //   if (e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     closeAside();
  //   }
  // });
}
