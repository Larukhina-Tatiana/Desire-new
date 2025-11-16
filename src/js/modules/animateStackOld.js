export class StackCards {
  constructor(element, options = {}) {
    this.element = element;
    this.activeCard = null;

    this.options = Object.assign(
      {
        marginY: 24,
        scaleFactor: 0.05,
        minScale: 0.85,
      },
      options
    );

    this.items = Array.from(
      this.element.querySelectorAll(".js-stack-cards__item")
    );

    this.items.forEach((item) => {
      item.addEventListener("click", () => {
        if (item === this.activeCard) {
          this.deactivateCard();
        } else {
          this.activateCard(item);
        }
      });
    });

    this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
    this.marginY = this.options.marginY;

    this.scrolling = false;
    this.scrollingListener = false;

    this.initObserver();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.deactivateCard();
      }
    });
    document.addEventListener("click", (e) => {
      if (!this.element.contains(e.target)) {
        this.deactivateCard();
      }
    });
    window.addEventListener("scroll", () => {
      console.log("scroll detected");

      if (this.activeCard) {
        console.log("deactivating active card");
        this.deactivateCard();
      }

      this.animate();
    });

    window.addEventListener("resize", () => this.recalc());
  }

  recalc() {
    this.items = Array.from(
      this.element.querySelectorAll(".js-stack-cards__item")
    );
    this.cardHeight = this.items.length ? this.items[0].offsetHeight : 0;
  }

  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!this.scrollingListener) {
          this.scrollingListener = this.onScroll.bind(this);
          window.addEventListener("scroll", this.scrollingListener);
          window.requestAnimationFrame(() => this.animate());
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
    console.log("scroll detected");

    if (this.activeCard) {
      console.log("deactivating active card");
      this.deactivateCard();
    }

    if (this.scrolling) return;
    this.scrolling = true;

    window.requestAnimationFrame(() => {
      this.animate();
      this.scrolling = false;
    });
  }

  animate() {
    if (!this.cardHeight) {
      this.recalc();
      if (!this.cardHeight) return;
    }

    const offset = this.cardHeight + this.marginY;
    const parentRect = this.element.getBoundingClientRect();

    this.items.forEach((item, i) => {
      if (item === this.activeCard) return;

      const itemRect = item.getBoundingClientRect();
      const itemTop = itemRect.top - parentRect.top;

      const translateY = this.marginY * i;
      const scrolling = translateY - itemTop;

      if (scrolling > 0) {
        const scaleRaw =
          (this.cardHeight - scrolling * this.options.scaleFactor) /
          this.cardHeight;
        const scale = Math.max(scaleRaw, this.options.minScale);
        item.style.transform = `translateY(${translateY}px) scale(${scale})`;
      } else {
        item.style.transform = `translateY(${translateY}px) scale(1)`;
      }
    });
  }

  activateCard(item) {
    this.items.forEach((el) => el.classList.remove("is-active"));

    const parentRect = this.element.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const top = itemRect.top - parentRect.top + this.element.scrollTop;
    const left = itemRect.left - parentRect.left;

    item.style.position = "absolute";
    item.style.top = `${top}px`;
    item.style.left = `${left}px`;
    item.style.width = `${itemRect.width}px`;
    item.style.zIndex = "10";
    item.classList.add("is-active");

    this.activeCard = item;
  }

  deactivateCard() {
    if (!this.activeCard) return;

    this.activeCard.classList.remove("is-active");

    // Сброс всех вручную заданных стилей
    this.activeCard.style.position = ""; // ← не sticky!
    this.activeCard.style.top = "";
    this.activeCard.style.left = "";
    this.activeCard.style.width = "";
    this.activeCard.style.zIndex = "";
    this.activeCard.style.transform = "";

    this.activeCard = null;

    this.animate(); // пересчёт стековой анимации
  }
}
