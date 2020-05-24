export default class ModalWindow {
  constructor(popup, modalWindow, modalWindowClose) {
    this.popup = popup;
    this.modalWindow = modalWindow;
    this.modalWindowClose = modalWindowClose;
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  setEventListeners() {
    this.popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("place-card__image")) {
        this.modalWindow.style.display = "block";
        this.modalWindow.style.backgroundImage =
          event.target.style.backgroundImage;
      }
    });

    this.modalWindowClose.addEventListener("click", (e) => {
      if (event.target.classList.contains("modal-window_close")) {
        this.modalWindow.style.display = "none";
      }
    });
  }
}
