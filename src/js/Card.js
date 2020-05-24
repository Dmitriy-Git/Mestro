export default class Card {
  constructor() {
    this.myCard = document.createElement("div");
    this.remove = this.remove.bind(this);
  }
  create(name, link) {
    this.myCard.classList.add("place-card");
    this.myCard.insertAdjacentHTML(
      "beforeend",
      `<div class="place-card__image" style="background-image: url(${link})">
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${name}</h3>
      <button class="place-card__like-icon"></button>
    </div>`
    );
    const cardTitle = this.myCard.querySelector(".place-card__name");
    cardTitle.textContent = name;
    this.setEventListener();
    return this.myCard;
  }

  like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }
  remove(event) {
    event.target.removeEventListener("click", this.remove);
    this.myCard
      .querySelector(".place-card__like-icon")
      .removeEventListener("click", this.like);

    /*REVIEW. Сначала надо удалить обработчики, а потом карту. */
    event.target.closest(".place-card").remove();
  }

  setEventListener() {
    this.myCard
      .querySelector(".place-card__like-icon")
      .addEventListener("click", this.like);
    this.myCard
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", this.remove);
  }
}
