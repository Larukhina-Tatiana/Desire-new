export function asideBtn() {
  const asideBtn = document.getElementById("js-asideBtn");
  const aside = document.querySelector(".aside");
  const headerInner = document.querySelector(".header__inner");
  const body = document.body;

  function openAside() {
    if (asideBtn) {
      asideBtn.classList.toggle("open");
      aside.classList.toggle("open");
      headerInner.classList.toggle("hidden");
      body.classList.toggle("no-scroll");
      // asideBtn.setAttribute("aria-expanded", "true");
      // asideBtn.focus(); // если есть tabindex="-1"
    }
  }

  if (asideBtn) {
    asideBtn.addEventListener("click", openAside);
    console.log("asideBtn нажатие", asideBtn);
  }
  // asideBtn.addEventListener("keydown", (e) => {
  //   if (e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     closeAside();
  //   }
  // });
}
