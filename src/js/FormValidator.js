export default class FormValidator {
  constructor(form, button, name, self, mestro, formNext) {
    this.form = form;
    this.button = button;
    this.name = name;
    this.self = self;
    this.mestro = mestro;
    this.formNext = formNext;
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.setSubmitButtonState = this.setSubmitButtonState.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this.validate = this.validate.bind(this);
    this.editMesto = this.editMesto.bind(this);
  }
  checkInputValidity(event) {
    this.validate(event.target);
  }
  //Метод показывает ошибку, если инпуты не проходят валидацию. Если проходят — скрывает ошибку.

  validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (element.value.length === 0) {
      errorElement.textContent = "Это обязательное поле";
      this.button.setAttribute("disabled", true);
      this.button.classList.add("popup__button_disabled");

      return false;
    } else if (element.value.length < 2) {
      errorElement.textContent = "Должно быть от 2 до 30 символов";
      this.button.setAttribute("disabled", true);
      this.button.classList.add("popup__button_disabled");

      return false;
    } else if (element.value.length > 30) {
      errorElement.textContent = "Должно быть от 2 до 30 символов";
      this.button.setAttribute("disabled", true);
      this.button.classList.add("popup__button_disabled");

      return false;
    }
    errorElement.textContent = "";
    this.button.removeAttribute("disabled");
    this.button.classList.remove("popup__button_disabled");
    return true;
  }

  setSubmitButtonState() {
    // делать кнопку сабмита активной и неактивной.
    event.preventDefault();
    const inputs = [...this.form.elements].filter(
      (element) => element.tagName === "INPUT"
    );
    inputs.forEach((element) => {
      if (element.value.length < 2 || element.value.length < 2) {
        this.button.setAttribute("disabled", true);
        this.button.classList.add("popup__button_disabled");
      } else if (element.value.length > 30 || element.value.length > 30) {
        this.button.setAttribute("disabled", true);
        this.button.classList.add("popup__button_disabled");
      } else {
        return false;
      }
    });
  }

  editMesto() {
    event.preventDefault();
    const name = event.currentTarget.elements.name;
    const link = event.currentTarget.elements.link;

    if (name.value.length === 0 || link.value.length === 0) {
      this.mestro.setAttribute("disabled", true);
      this.mestro.classList.add("popup__button_disabled");
    } else {
      this.mestro.removeAttribute("disabled");
      this.mestro.classList.remove("popup__button_disabled");
    }
  }
  setEventListeners() {
    //добавлять обработчики.
    this.formNext.addEventListener("input", this.editMesto);
    this.name.addEventListener("input", this.checkInputValidity);
    this.self.addEventListener("input", this.checkInputValidity);
    this.form.addEventListener("input", this.setSubmitButtonState);
  }
}
