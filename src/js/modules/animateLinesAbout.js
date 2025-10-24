export function animateLinesAbout() {
  const lines = document.querySelectorAll(".details__line");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const targetWidth = el.dataset.width;

        if (entry.isIntersecting) {
          el.style.transition = "width 1.8s ease-out";
          el.style.width = `${targetWidth}%`;
        } else {
          el.style.transition = "none";
          el.style.width = "0%";
        }
      });
    },
    {
      threshold: 0.4, // запускаем, когда видно 40% элемента
    }
  );

  lines.forEach((line) => observer.observe(line));
}
