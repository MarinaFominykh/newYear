export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._id = data.id;
    this._name = data.name;
    this._age = data.age;
    this._src = data.src;
     this._target = data.target;
    this._currentSum = data.currentSum;
    this._limit = data.limit;
    this._description = data.description;

    this._template = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.swiper-slide');
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    // this.cardOpenHistory.addEventListener('click', () => {
    //   this._handleCardClick(
    //     this._name,
    //     this._age,
    //     this._src,
    //     this._target,
    //     this._currentSum,
    //     this._limit,
    //     this._description
    //   );
    // });
    this.cardOpenHistory.addEventListener('click', () => {
     this._cardHistory.classList.toggle('slide__preview_opened')

    })
     this._cardHelpButton.addEventListener('click', () => {
      this._handleCardClick( this._id)
     })
  }

  getCard = () => {
    this._cardElement = this._template.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.slide__img');
    this._cardName = this._cardElement.querySelector('.slide__name');
    this._cardAge = this._cardElement.querySelector('.slide__age');
    this.cardOpenHistory = this._cardElement.querySelector('.slide__button');
    this._cardTarget = this._cardElement.querySelector('.slide__target');
    this._cardCurrentSum = this._cardElement.querySelector('.slide__span_sum');
    this._cardLimit = this._cardElement.querySelector('.slide__span_limit');
    this._cardProgressBar = this._cardElement.querySelector('.slide__progress');
    this._cardHistory = this._cardElement.querySelector('.slide__preview');
    this._cardHelpButton = this._cardElement.querySelector('.slide__link');
    
    this._cardName.textContent = this._name;
    this._cardAge.textContent =this._age;
    this._cardImage.src = `./images/${this._src}.png`;
    this._cardImage.alt = this._name;
    this._cardTarget.textContent = this._target;
    this._cardCurrentSum.textContent= `${this._currentSum}₽`;
    this._cardLimit.textContent = `${this._limit}₽`;
    this._cardProgressBar.value = this._currentSum;
    this._cardProgressBar.max = this._limit;
    this._cardHistory.textContent = this._description;

    this._setEventListeners();

    return this._cardElement;
  };
}
