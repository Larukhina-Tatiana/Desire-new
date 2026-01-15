export default function animateGalleyCard() {
  const items = document.querySelectorAll(".gallery__link");

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x, y;

    // Определяем координаты для мыши или касания
    if (e.type === "mousemove") {
      x = e.clientX - rect.left - rect.width / 2;
      y = e.clientY - rect.top - rect.height / 2;
    } else if (e.type === "touchmove") {
      x = e.touches[0].clientX - rect.left - rect.width / 2;
      y = e.touches[0].clientY - rect.top - rect.height / 2;
    }

    const rotateX = (x / rect.height) * -30;
    const rotateY = (y / rect.width) * -30;

    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    const bgX = (x / rect.width) * 50 + 50;
    e.currentTarget.style.backgroundPositionX = `${bgX}%`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    e.currentTarget.style.backgroundPositionX = "";
  };

  items.forEach((item) => {
    // Обработчики для мыши
    item.addEventListener("mousemove", handleMove);
    item.addEventListener("mouseleave", handleLeave);

    // Обработчики для касаний
    item.addEventListener("touchmove", handleMove);
    item.addEventListener("touchend", handleLeave);
  });
}
