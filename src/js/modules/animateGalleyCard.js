export default function animateGalleyCard() {
  const items = document.querySelectorAll(".gallery__link");

  // Константы для расчета поворота
  const ROTATION_FACTOR_X = -30; // Максимальный угол поворота по X
  const ROTATION_FACTOR_Y = -30; // Максимальный угол поворота по Y

  items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Оптимизированный расчет углов поворота
      const rotateX = (y / rect.height) * ROTATION_FACTOR_X;
      const rotateY = (x / rect.width) * ROTATION_FACTOR_Y;

      item.style.transform = `
        perspective(500px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;

      const bgX = (x / rect.width) * 50 + 50;
      item.style.backgroundPositionX = `${bgX}%`;
    });
  });
}
