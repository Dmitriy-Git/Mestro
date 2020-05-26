export default class Popup {
  constructor(popup, button) {
    this.popup = popup;
    this.button = button;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.popup.classList.add("popup_is-opened");
    this.button.setAttribute("disabled", true);
    this.button.classList.add("popup__button_disabled");
  }

  close() {
    this.popup.classList.remove("popup_is-opened");
  }
}
