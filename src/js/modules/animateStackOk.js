// export class StackCards {
//   constructor(element, options = {}) {
//     this.element = element;
//     this.options = Object.assign(
//       {
//         marginY: 24,
//         scaleFactor: 0.05,
//         minScale: 0.85,
//         invertScale: false,
//         maxGrow: 0.15,
//       },
//       options
//     );

//     this.reducedMotion = window.matchMedia
//       ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
//       : false;

//     this.items = Array.from(
//       this.element.querySelectorAll(".js-stack-cards__item")
//     );
//     this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
//     this.marginY = this.options.marginY;

//     this.isAnimating = false; // Changed from scrolling
//     this.scrollingListener = false;
//     this.resizeListener = false;

//     if (this.reducedMotion) return;

//     this.initObserver();
//     this.resizeListener = this.onResize.bind(this);
//     window.addEventListener("resize", this.resizeListener);
//   }

//   recalc() {
//     this.items = Array.from(
//       this.element.querySelectorAll(".js-stack-cards__item")
//     );
//     this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
//     if (this.items.length === 0) {
//       console.warn("No items found for stacking.");
//     }
//   }

//   initObserver() {
//     if (!("IntersectionObserver" in window)) {
//       // Fallback for browsers that don't support IntersectionObserver
//       this.initScrollListener();
//       return;
//     }

//     const observer = new IntersectionObserver((entries) => {
//       const entry = entries[0];
//       if (!entry) return;
//       if (entry.isIntersecting) {
//         if (!this.scrollingListener) {
//           this.scrollingListener = this.onScroll.bind(this);
//           window.addEventListener("scroll", this.scrollingListener);
//           window.requestAnimationFrame(() => this.animate());
//         }
//       } else if (this.scrollingListener) {
//         window.removeEventListener("scroll", this.scrollingListener);
//         this.scrollingListener = false;
//       }
//     });
//     observer.observe(this.element);
//   }

//   initScrollListener() {
//     // Fallback for browsers without IntersectionObserver
//     this.scrollingListener = this.onScroll.bind(this);
//     window.addEventListener("scroll", this.scrollingListener);
//     window.requestAnimationFrame(() => this.animate());
//   }

//   onResize() {
//     this.recalc();
//     if (!this.reducedMotion) window.requestAnimationFrame(() => this.animate());
//   }

//   onScroll() {
//     if (this.isAnimating) return; // Changed from scrolling
//     this.isAnimating = true; // Changed from scrolling
//     window.requestAnimationFrame(() => {
//       this.animate();
//       this.isAnimating = false; // Changed from scrolling
//     });
//   }

//   animate() {
//     if (!this.cardHeight) {
//       this.recalc();
//       if (!this.cardHeight) return;
//     }

//     const top = this.element.getBoundingClientRect().top;
//     const offset = this.cardHeight + this.marginY;
//     const transforms = new Array(this.items.length).fill("");
//     const totalHeight = this.items.length * (this.cardHeight + this.marginY);

//     for (let i = 0; i < this.items.length; i++) {
//       const translateY = this.marginY * i;
//       const trigger = offset * i;
//       const scrolling = trigger - top;
//       const isLastCard = i === this.items.length - 1;

//       // По умолчанию — без масштабирования
//       transforms[i] = `translateY(${translateY}px) scale(1)`;

//       // Для последней карточки используем специальный триггер
//       const effectiveScrolling = isLastCard
//         ? Math.min(scrolling, totalHeight - this.cardHeight)
//         : scrolling;

//       if (effectiveScrolling > 0) {
//         const scaleRaw =
//           (this.cardHeight - effectiveScrolling * this.options.scaleFactor) /
//           this.cardHeight;
//         const scale = Math.max(scaleRaw, this.options.minScale);

//         if (this.options.invertScale) {
//           // Для всех карточек кроме последней
//           if (!isLastCard) {
//             // ✅ масштабируем все карточки ниже текущей
//             for (let j = i + 1; j < this.items.length; j++) {
//               const translateYNext = this.marginY * j;
//               transforms[j] = `translateY(${translateYNext}px) scale(${scale})`;
//             }
//           } else {
//             // Для последней карточки применяем масштаб напрямую
//             transforms[i] = `translateY(${translateY}px) scale(${scale})`;
//           }
//         } else {
//           transforms[i] = `translateY(${translateY}px) scale(${scale})`;
//         }
//       }
//     }

//     this.items.forEach((item, i) => {
//       item.style.transform = transforms[i];
//     });
//   }

//   destroy() {
//     if (this.scrollingListener)
//       window.removeEventListener("scroll", this.scrollingListener);
//     if (this.resizeListener)
//       window.removeEventListener("resize", this.resizeListener);
//   }
// }

export class StackCards {
  constructor(element) {
    this.element = element;
    this.items = element.querySelectorAll(".js-stack-cards__item");
    this.cardHeight = this.items[0].offsetHeight;
    this.marginY = 20;
    this.scrolling = false;
    this.scrollingListener = false;

    this.cardTop = this.items[0].getBoundingClientRect().top;

    this.initObserver();
  }

  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!this.scrollingListener) {
          this.scrollingListener = this.onScroll.bind(this);
          window.addEventListener("scroll", this.scrollingListener);
        }
      } else {
        if (this.scrollingListener) {
          window.removeEventListener("scroll", this.scrollingListener);
          this.scrollingListener = false;
        }
      }
    });

    observer.observe(this.element);
  }

  onScroll() {
    if (this.scrolling) return;
    this.scrolling = true;
    window.requestAnimationFrame(() => this.animate());
  }

  animate() {
    const containerTop = this.element.getBoundingClientRect().top;
    const offset = this.cardHeight + this.marginY;

    this.items.forEach((item, i) => {
      const translateY = this.marginY * i;
      const trigger = offset * i;
      const scrolling = this.cardTop - containerTop - trigger;

      const scale =
        scrolling > 0
          ? Math.max(
              (this.cardHeight - scrolling * 0.05) / this.cardHeight,
              0.85
            )
          : 1;

      item.style.transform = `translateY(${translateY}px) scale(${scale})`;
    });

    this.scrolling = false;
  }
}
