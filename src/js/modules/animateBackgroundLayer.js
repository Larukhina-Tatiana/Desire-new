export function initBackgroundLayerAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const layer = section.querySelector(".background-layer");
        if (!layer) return;

        if (entry.isIntersecting) {
          layer.classList.add("animate");
        } else {
          layer.classList.remove("animate"); // повторная активация
        }
      });
    },
    {
      threshold: 0.5, // можно настроить чувствительность
    }
  );

  document.querySelectorAll(".js-animate-bg").forEach((section) => {
    observer.observe(section);
  });
}
