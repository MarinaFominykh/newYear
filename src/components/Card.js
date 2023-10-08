export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._age = data.name;
    this._src = data.src;
     this._target = data.target;
    this._currentSum = data.currentSum;
    this._limit = data.limit;
    this._description = data.description;

    this._template = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.places__card');
    this._handleCardClick = handleCardClick;
  }

  // _handleLikeIcon = () => {
  //     this._likeButton.classList.toggle('places__like_activ')
  // }

  // _handleDeleteCard = () => {
  //     this._cardElement.remove();
  //     this._cardElement = null;
  // }

  _setEventListeners() {
    this.cardOpenHistory.addEventListener('click', () => {
      this._handleCardClick(
        this._name,
        this._age,
        this._src,
        this._target,
        this._currentSum,
        this._limit,
        this._description
      );
    });
  }

  getCard = () => {
    this._cardElement = this._template.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.slide__img');
    this._cardName = this._cardElement.querySelector('.slide__name');
    this._cardAge = this._cardElement.querySelector('.slide__age');
    this.cardOpenHistory = this._cardElement.querySelector('.slide__button');
    
    this._cardName.textContent = this._name;
    this._cardAge.textContent =this._age;
    this._cardImage.src = `./images/${this._src}.png`
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  };
}
