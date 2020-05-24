export default class UserInfo {
  constructor(name, info, edit, self, api, image) {
    this.name = name;
    this.info = info;
    this.edit = edit;
    this.self = self;
    this.api = api;
    this.image = image;
    //console.log(this.name.textContent);
  }

  setUserInfo() {
    this.name.textContent = this.edit.value;
    this.info.textContent = this.self.value;
  }

  updateUserInfo() {
    this.edit.value = this.name.textContent;
    this.self.value = this.info.textContent;
  }

  sendForm() {
    this.api.sendData(this.edit.value, this.self.value).then(() => {
      this.updateUserInfo(this.name.textContent, this.info.textContent);
      //popupTwo.close();
    });
  }

  defaultData() {
    this.api.getInitialCards().then((res) => {
      //console.log(result);

      this.name.textContent = res.name;
      this.info.textContent = res.about;
      this.image.style.backgroundImage = `url("${res.avatar}")`;
    });
  }
}
