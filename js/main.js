const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

if (document.querySelector(".footer__form")) {
  const form = document.querySelector(".footer__form");
  const email = document.querySelector("#email");

  const STORAGE_KEY = "form-subscribe";
  let formData = {};

  form.addEventListener("submit", onFormSubmit);
  email.addEventListener("input", onFormInput);

  function onFormSubmit(event) {
    event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

    if (event.currentTarget.elements.email.value === "") {
      alert("The field must be filled`");
    } else {
      event.preventDefault();
      form.reset();
      localStorage.removeItem(STORAGE_KEY);

      const alertBox = document.createElement("div");
      alertBox.classList.add("footer__form-alert");
      alertBox.innerText = `Subscription completed!`;
      form.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    }
  }
  function onFormInput(event) {
    // console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  (function restoreFormOutput() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedFormData && savedFormData.email) {
      email.value = savedFormData.email;
    }
  })();
}

if (document.querySelector(".contacts__form")) {
  const formContacts = document.querySelector(".contacts__form");
  // const email = document.querySelector("#email");

  const STORAGE_KEY = "contacts-subscribe";
  let formData = {};

  formContacts.addEventListener("submit", onFormSubmit);
  formContacts.addEventListener("input", onFormInput);

  function onFormSubmit(event) {
    event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

    if (event.currentTarget.elements.email.value === "") {
      alert("The field must be filled`");
    } else {
      event.preventDefault();
      formContacts.reset();
      localStorage.removeItem(STORAGE_KEY);

      const alertBox = document.createElement("div");
      alertBox.classList.add("contacts__form-alert");
      alertBox.innerText = `Subscription completed!`;
      formContacts.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    }
  }

  function onFormInput(event) {
    // console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  (function restoreFormOutput() {
    if (localStorage.getItem(STORAGE_KEY)) {
      formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
      console.log(formData);
      for (let key in formData) {
        formContacts.elements[key].value = formData[key];
      }
    }
  })();
}

if (document.querySelector(".header__btn")) {
  headerBtn.addEventListener("click", () => {
    rightsideMenu.classList.remove("rightside-menu--close");
  });
  rightsideMenuClose.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });
  $(".header__btn-menu").on("click", function () {
    $(".header__inner").toggleClass("header__inner-btn--open");
  });
}

if ($(window).width() < 641) {
  $(".works-path__item--measurements").appendTo($(".works-path__items-box"));
}

if ($(window).width() < 541) {
  $(".js-menu-list").appendTo($(".js-transfer"));
}

$(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".contacts-slider__list").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1781,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          dots: true,
        },
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="./images/prev.svg" alt="icon prev"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="./images/next.svg" alt="icon next"></button>',
  });
});

if (document.querySelector(".gallery__inner")) {
  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".office",
    },
  });
}
