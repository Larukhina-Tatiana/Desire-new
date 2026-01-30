export function initVisibilityAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;

        // Все элементы внутри секции, которые должны анимироваться
        const animatedElements = section.querySelectorAll(
          "[data-animate-on-visible]"
        );

        animatedElements.forEach((el) => {
          if (entry.isIntersecting) {
            el.classList.add("animate");
          } else {
            // если нужно, чтобы анимация могла повторяться при повторном появлении
            el.classList.remove("animate");
          }
        });
      });
    },
    {
      threshold: 0.5,
    }
  );

  // Секции, внутри которых есть анимируемые элементы
  document
    .querySelectorAll(".js-animate-bg, .js-animate-icons, .about__title")
    .forEach((section) => {
      observer.observe(section);
    });
}
