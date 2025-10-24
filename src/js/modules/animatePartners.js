export function animatePartners() {
  const items = document.querySelectorAll(".partners__item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible"); // если нужен повтор
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  items.forEach((item) => observer.observe(item));
}
