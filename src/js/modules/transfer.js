import { TransferElements } from "../vendor/TransferElements.js";

export function transferElements() {
  if (typeof TransferElements !== "function") {
    console.error(
      "TransferElements не определён. Проверь подключение скрипта."
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
      breakpoint: 541,
      position: 1,
    },
  ];

  transfers.forEach(
    ({ sourceSelector, targetSelector, breakpoint, position }) => {
      const sourceElement = document.querySelector(sourceSelector);
      const targetElement = document.querySelector(targetSelector);

      if (sourceElement && targetElement) {
        new TransferElements({
          sourceElement,
          breakpoints: {
            [breakpoint]: {
              targetElement,
              targetPosition: position,
            },
          },
        });
      } else {
        console.error(
          `Ошибка: Элемент не найден — ${sourceSelector} или ${targetSelector}`
        );
      }
    }
  );
}
