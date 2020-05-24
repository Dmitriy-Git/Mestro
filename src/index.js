import "./style.css";

import Api from "./js/Api";
import Card from "./js/Card";
import CardList from "./js/CardList";
import FormValidator from "./js/FormValidator";
import Popup from "./js/Popup";
import ModalWindow from "./js/ModalWindow";
import PopupNew from "./js/PopupNew";
import UserInfo from "./js/UserInfo";
import { initialCards } from "./js/initialCards";

//переменные

const cardPlaces = document.querySelector(".places-list");
const button = document.querySelector(".user-info__button");
const popupPlaces = document.querySelector(".popup");
const popup__close = document.querySelector(".popup__close");
const placesList = document.querySelector(".places-list");
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const image = document.querySelector(".user-info__photo");
const name = form.elements.name;
const link = form.elements.link;
const modalWindow = document.querySelector(".modal-window");
const modalWindowClose = document.querySelector(".modal-window_close");
const buttonEdit = document.querySelector(".user-info__button-name");
const newPopup = document.querySelector(".new__popup");
const popupClose = document.querySelector(".popup__close-new");
let UserInfoName = document.querySelector(".user-info__name");
let UserInfoJob = document.querySelector(".user-info__job");

const defaultName = UserInfoName.textContent;
const defaultAbout = UserInfoJob.textContent;
const newForm = document.querySelector("#new-form");
const edit = newForm.elements.edit;
const self = newForm.elements.self;
const popup = document.querySelector(".popup_edit");
const addButtonMesto = document.querySelector(".popup__button");
const addButton = document.querySelector(".popup__button_type_new");
const userInfoOpen = document.querySelector(".user-info");

/*
for (const item of result) {
  const a = item;
}*/

//Обработчики

form.addEventListener("submit", (event) => {
  event.preventDefault();
  cardList.addCard(name.value, link.value);
  form.reset();
  popupOne.close();
});
newForm.addEventListener("submit", (event) => {
  event.preventDefault();
  userInfo.setUserInfo();
  userInfo.sendForm();
  newForm.reset();
  popupTwo.close();
});

const api = new Api({
  baseUrl: "https://praktikum.tk/cohort10",
  headers: {
    authorization: "165f3206-22d5-423f-975a-7e75b1aca5ec",
    "Content-Type": "application/json",
  },
});

//Класс popup
const popupOne = new Popup(popupPlaces, addButtonMesto);
button.addEventListener("click", popupOne.open);
popup__close.addEventListener("click", popupOne.close);

// Класс UserInfo

const userInfo = new UserInfo(
  UserInfoName,
  UserInfoJob,
  edit,
  self,
  api,
  image,
  userInfoOpen
);
userInfo.defaultData();

//Класс модального окна
const windowModal = new ModalWindow(placesList, modalWindow, modalWindowClose);
windowModal.setEventListeners();

//Класс FormValidator
const formValidation = new FormValidator(
  newForm,
  addButton,
  aboutName,
  prof,
  addButtonMesto,
  form
);
formValidation.setEventListeners();

//Класс NewPopup
const popupTwo = new PopupNew(newPopup, edit, self, userInfo, formValidation);
buttonEdit.addEventListener("click", popupTwo.open);
popupClose.addEventListener("click", popupTwo.close);

// это лишнее
//const newApi = () => api().addArrayCard();

const card = () => new Card();
const newUserCard = (name, link) => card().create(name, link);

const cardList = new CardList(cardPlaces, initialCards, newUserCard, api);
cardList.render();
