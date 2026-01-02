// Импортируем Swiper и необходимые модули
import Swiper from "swiper";
// Добавляем модуль A11y для доступности
import { Pagination, Autoplay, A11y, Navigation } from "swiper/modules";

// Импортируем стили Swiper (если они не импортируются глобально)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";
// Импортируем стили для доступности, если они нужны
// import 'swiper/css/a11y';

// Экспортируем функцию для инициализации Swiper
export function initHeroSlider() {
  const heroSliderElement = document.querySelector(".hero__slider");

  if (heroSliderElement) {
    const swiper = new Swiper(heroSliderElement, {
      // Подключаем необходимые модули, включая A11y
      modules: [Pagination, Autoplay, A11y],
      // autoHeight: true,

      // Настройки Swiper
      loop: true, // Бесконечная прокрутка
      speed: 800, // Скорость анимации переключения слайдов
      autoplay: {
        delay: 3000, // Задержка между переключениями слайдов
        //   //   disableOnInteraction: false, // Автоматическое воспроизведение не будет остановлено после взаимодействия пользователя
      },

      // Настройки пагинации
      pagination: {
        el: ".swiper-pagination", // Селектор элемента пагинации
        clickable: true, // Делает точки пагинации кликабельными
      },

      // Включаем модуль доступности Swiper
      a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
        firstSlideMessage: "Это первый слайд",
        lastSlideMessage: "Это последний слайд",
        paginationBulletMessage: "Перейти к слайду {{index}}",
        notificationClass: "swiper-notification",
        containerMessage: "Слайдер с элементами",
        containerRoleDescriptionMessage: "карусель",
        itemRoleDescriptionMessage: "слайд",
      },

      // Дополнительные настройки, если нужны стрелки навигации
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // Дополнительные настройки, если нужен скроллбар
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: true,
      // },
    });

    // Удаляем или оставляем закомментированным старый код для доступности,
    // так как Swiper A11y модуль обрабатывает это автоматически.
    /*
    swiper.on("slideChange", () => {
      swiper.slides.forEach((slide, index) => {
        const isActive = index === swiper.activeIndex;
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        if (isActive) slide.focus();
      });
    });

    swiper.slides.forEach((slide, index) => {
      slide.setAttribute(
        "aria-hidden",
        index !== swiper.activeIndex ? "true" : "false"
      );
    });
    */
  }
}
export function initBlogSlider() {
  const sliders = document.querySelectorAll(".blog-slider");
  console.log(
    "Найдено слайдеров:.blog-slider ",
    document.querySelectorAll(".blog-slider").length
  );

  sliders.forEach((slider) => {
    new Swiper(slider, {
      modules: [Navigation, A11y], // ✅ обязательно передаём модули
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: slider.querySelector(".blog-slider__arrow--next"),
        prevEl: slider.querySelector(".blog-slider__arrow--prev"),
      },
      a11y: {
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        containerMessage: "Slider with elements",
        containerRoleDescriptionMessage: "carousel",
        itemRoleDescriptionMessage: "slide",
      },
    });
  });
}
