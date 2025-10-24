// export function updateHeartScale() {
//   if (window.innerWidth < 768) return; // отключаем на мобильных
//   const svg = document.getElementById("svg");
//   if (!svg) return;
//   window.addEventListener("scroll", function () {
//     let scrollTop = window.scrollY;
//     svg.style.backgroundSize = 100 + scrollTop * 2 + "px";
//   });
// }

// export function initHeartScrollEffect(svgSelector = "#svg", options = {}) {
//   const svg = document.querySelector(svgSelector);
//   if (!svg) return;

//   const { baseSize = 100, multiplier = 2, maxSize = 400 } = options;

//   function updateHeartSize() {
//     const scrollTop = window.scrollY;
//     const size = Math.min(maxSize, baseSize + scrollTop * multiplier);
//     svg.style.backgroundSize = `${size}px`;
//     console.log("Size:", size);
//   }

//   window.addEventListener("scroll", updateHeartSize);
// }

export function updateHeartScale() {
  const svg = document.getElementById("svg");
  if (!svg) return;

  function onScroll() {
    const scrollTop = window.scrollY;
    svg.style.backgroundSize = 100 + scrollTop * 2 + "px";
  }

  function checkWidthAndBind() {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", onScroll);
    } else {
      window.removeEventListener("scroll", onScroll);
      svg.style.backgroundSize = "135%"; // сброс
    }
  }

  checkWidthAndBind();
  window.addEventListener("resize", checkWidthAndBind);
}
