export class StackCards {
  constructor(element, options = {}) {
    this.element = element;

    this.options = Object.assign(
      {
        marginY: 24,
        scaleFactor: 0.5,
        minScale: 0.55,
      },
      options
    );

    this.items = Array.from(
      this.element.querySelectorAll(".js-stack-cards__item")
    );

    this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
    this.animate(); // ← гарантирует начальный расчёт

    window.addEventListener("scroll", () => {
      this.animate();
    });

    window.addEventListener("resize", () => this.recalc());

    this.animate(); // начальная трансформация
  }

  recalc() {
    this.items = Array.from(
      this.element.querySelectorAll(".js-stack-cards__item")
    );
    this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
  }

  animate() {
    this.recalc();

    const scrollY = window.scrollY;

    this.items.forEach((item, i) => {
      const translateY = this.options.marginY * i;
      // const itemRect = item.getBoundingClientRect();
      // const itemTop = itemRect.top + scrollY;

      // const expectedTop = this.element.offsetTop + translateY;
      // const overlap = expectedTop - itemTop;

      // console.log(`card ${i} overlap:`, overlap);

      // if (overlap < 0) {
      //   const scaleRaw =
      //     (this.cardHeight - overlap * this.options.scaleFactor) /
      //     this.cardHeight;
      //   const scale = Math.max(scaleRaw, this.options.minScale);
      //   console.log(`card ${i} scale:`, scale);
      //   item.style.transform = `translateY(${translateY}px) scale(${scale})`;
      // } else {
      item.style.transform = `translateY(${translateY}px) scale(1)`;
      // }
    });
  }
}
