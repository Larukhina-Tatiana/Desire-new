export function observeAndInitStack() {
  const stack = document.querySelector(".animate-stack");
  if (!stack) return;

  const init = () => {
    const cards = stack.querySelectorAll(".animate-stack__animator");
    const total = cards.length;
    console.log("total", total);
    if (!total) return;

    stack.style.setProperty("--animate-stack-count", total);

    cards.forEach((card, i) => {
      card.style.setProperty("--index", i + 1);
    });
  };

  // Если карточки уже есть — запускаем сразу
  if (stack.querySelectorAll(".animate-stack__animator").length) {
    init();
    return;
  }

  // Иначе ждём появления через MutationObserver
  const observer = new MutationObserver(() => {
    if (stack.querySelectorAll(".animate-stack__animator").length) {
      init();
      observer.disconnect();
    }
  });

  observer.observe(stack, { childList: true, subtree: true });
}
