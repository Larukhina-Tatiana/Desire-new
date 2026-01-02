export function animateLinesH2() {
  const subtitles = document.querySelectorAll(".subtitle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("subtitle--visible");
          // если нужно только один раз — можно отключить наблюдение:
          // observer.unobserve(entry.target);
        } else {
          // сбрасываем класс при выходе из зоны
          entry.target.classList.remove("subtitle--visible");
        }
      });
    },
    {
      threshold: 0.5, // процент видимости (50%)
    }
  );

  subtitles.forEach((subtitle) => observer.observe(subtitle));
}
