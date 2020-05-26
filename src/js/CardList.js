export default class CardList {
  constructor(container, array, func, api) {
    this.container = container;
    //this.array = array;
    this.func = func;
    this.api = api;
  }
  /*
  addCard() {
    this.api.addArrayCard()
      
          this.container.appendChild(this.func(card.name, card.link))    
    
  }*/

  addCard(name, link) {
    this.container.appendChild(this.func(name, link));
  }
  render() {
    // Было
    /*for (const elem of this.array) {
    this.addCard(elem.name, elem.link);
  }*/
    //Стало
    this.api.addArrayCard().then((cards) => {
      //console.log(cards);
      for (const card of cards) {
        //console.log(card);
        this.addCard(card.name, card.link);
      }
    });
  }
}
