export default class PopupNew {
  constructor(popup, edit, self, newClass, Class) {
    this.popup = popup;
    this.edit = edit;
    this.self = self;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.newClass = newClass;
    this.Class = Class;
  }
  open() {
    this.newClass.updateUserInfo();
    this.Class.validate(this.edit);
    this.Class.validate(this.self);
    this.popup.classList.add("popup_is-opened");
  }
  close() {
    this.popup.classList.remove("popup_is-opened");
  }
}
