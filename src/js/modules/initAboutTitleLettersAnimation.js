// headingLettersAnimation.js

/**
 * Задаёт поочерёдные задержки появления букв заголовка.
 *
 * @param {Object} options
 * @param {string} options.titleSelector  - селектор заголовка-контейнера
 * @param {string} options.letterSelector - селектор букв внутри заголовка
 * @param {number} options.delayStep      - шаг задержки между буквами (в секундах)
 */
export function initAboutTitleLettersAnimation({
  titleSelector = "#about__title",
  letterSelector = ".letter[data-animate-on-visible]",
  delayStep = 0.2,
} = {}) {
  const title = document.querySelector(titleSelector);
  if (!title) return;

  const letters = title.querySelectorAll(letterSelector);
  if (!letters.length) return;

  letters.forEach((letter, index) => {
    // 0s, 0.1s, 0.2s, ...
    letter.style.transitionDelay = `${index * delayStep}s`;
  });
}
