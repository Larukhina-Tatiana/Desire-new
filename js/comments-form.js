if (document.querySelector(".comments__form")) {
  const formComments = document.querySelector(".comments__form");
  const STORAGE_KEY = "comments-subscribe";
  let formData = {};

  formComments.addEventListener("submit", onFormSubmit);
  formComments.addEventListener("input", onFormInput);

  function onFormSubmit(event) {
    event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

    if (event.currentTarget.elements.email.value === "") {
      alert("The field must be filled`");
    } else {
      event.preventDefault();
      formComments.reset();
      localStorage.removeItem(STORAGE_KEY);

      const alertBox = document.createElement("div");
      alertBox.classList.add("contacts__form-alert");
      alertBox.innerText = `Subscription completed!`;
      formComments.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    }
  }

  function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  (function restoreFormOutput() {
    if (localStorage.getItem(STORAGE_KEY)) {
      formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
      console.log(formData);
      if (
        formComments.elements[key].type === "chekbox" &&
        formComments.elements[key].value === "on"
      ) {
        formComments.elements[key].checked = true;
      } else {
        formComments.elements[key].value = formData[key];
      }
    }
    т;
  })();
}
