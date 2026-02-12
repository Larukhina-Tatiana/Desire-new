import { TransferElements } from "../vendor/TransferElements.js";

export function transferElements() {
  if (typeof TransferElements !== "function") {
    console.error(
      "TransferElements не определён. Проверь подключение скрипта.",
    );
    return;
  }

  const transfers = [
    {
      sourceSelector: ".works-path__item--measurements",
      targetSelector: ".works-path__items-box",
      breakpoint: 641,
      position: 1,
    },
    {
      sourceSelector: ".js-menu-list",
      targetSelector: ".js-transfer",
      breakpoint: 540,
      position: 1,
    },
  ];

  transfers.forEach(
    ({ sourceSelector, targetSelector, breakpoint, position }) => {
      const sourceElement = document.querySelector(sourceSelector);
      const targetElement = document.querySelector(targetSelector);

      // Мягкий пропуск, если элементов нет и не предполагается
      if (!sourceElement || !targetElement) return;

      new TransferElements({
        sourceElement,
        breakpoints: {
          [breakpoint]: {
            targetElement,
            targetPosition: position,
          },
        },
      });
    },
  );
}
