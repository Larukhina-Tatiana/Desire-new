export function initVisibilityAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;

        // Находим все элементы внутри секции, которые должны анимироваться
        const animatedElements = section.querySelectorAll(
          "[data-animate-on-visible]"
        );
        animatedElements.forEach((el) => {
          if (entry.isIntersecting) {
            el.classList.add("animate");
          } else {
            el.classList.remove("animate"); // позволяет повторно активировать
          }
        });
      });
    },
    {
      threshold: 0.5,
    }
  );

  // Наблюдаем за всеми секциями, где могут быть анимируемые элементы
  document
    .querySelectorAll(".js-animate-bg, .js-animate-icons")
    .forEach((section) => {
      observer.observe(section);
    });
}
