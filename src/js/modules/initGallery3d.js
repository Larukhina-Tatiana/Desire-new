// export function initGallery3d() {
//   let gallery3d = document.querySelector(".gallery3d");
//   console.log(gallery3d);
//   window.onmousemove = function (e) {
//     let x = e.clientX / 3;
//     gallery3d.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//   };
// }
// export function initGallery3d() {
//   const carousel = document.querySelector(".gallery3d__carousel");
//   if (!carousel) return;

//   window.addEventListener("mousemove", (e) => {
//     const x = e.clientX / 10; // делим для плавности
//     carousel.style.transform = `rotateY(${x}deg)`;
//   });
// }

// export function initGallery3d() {
//   const carousel = document.querySelector(".gallery3d__carousel");
//   if (!carousel) return;

//   const boxes = carousel.querySelectorAll(".gallery3d__box");
//   const count = boxes.length;
//   const angle = 360 / count;
//   const radius = 240; // можно вычислять динамически от ширины

//   boxes.forEach((box, i) => {
//     box.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
//   });

//   // вращение по мыши
//   window.addEventListener("mousemove", (e) => {
//     const percent = e.clientX / window.innerWidth; // от 0 до 1
//     const rotation = percent * 360; // полный круг
//     carousel.style.transform = `rotateY(${rotation}deg)`;
//   });
// }
export function initGallery3d() {
  const carousel = document.querySelector(".gallery3d__carousel");
  if (!carousel) return;

  const boxes = carousel.querySelectorAll(".gallery3d__box");
  const count = boxes.length;
  const angle = 360 / count;

  function updateLayout() {
    const boxWidth = boxes[0].offsetWidth;
    const boxHeight = boxes[0].offsetHeight;

    // вычисляем радиус динамически
    const radius = boxWidth / 2 / Math.tan(Math.PI / count);

    // расставляем карточки
    boxes.forEach((box, i) => {
      box.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
    });
  }

  // первый расчёт
  updateLayout();

  // пересчёт при ресайзе окна
  window.addEventListener("resize", updateLayout);

  // вращение по мыши
  window.addEventListener("mousemove", (e) => {
    const percent = e.clientX / window.innerWidth; // от 0 до 1
    const rotation = percent * 360; // полный круг
    carousel.style.transform = `rotateY(${rotation}deg)`;
  });

  //  вращение на мобильных
  window.addEventListener("touchmove", (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const touchX = e.touches[0].clientX;
    const percent = touchX / window.innerWidth;
    const rotation = percent * 360;
    carousel.style.transform = `rotateY(${rotation}deg)`;
  });
}
