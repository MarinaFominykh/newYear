export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._id = data.id;
    this._name = data.name;
    this._age = data.age;
    this._src = data.src;
    this._target = data.target;
    this._currentSum = data.currentSum;
    this._limit = data.limit;
    this._preview = data.preview;
    this._description = data.description;
    this._request = data.request;
    this._resume = data.resume;

    this._template = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.swiper-slide');
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this.cardOpenHistory.addEventListener('click', () => {
      if (this.cardOpenHistory.textContent === 'Узнать историю') {
        this.cardOpenHistory.textContent = 'Закрыть историю';
      } else {
        this.cardOpenHistory.textContent = 'Узнать историю';
      }
      this._cardDescription.classList.toggle('slide__description__opened');
      this._cardRequest.classList.toggle('slide__request_opened');
      this._cardResume.classList.toggle('slide__resume_opened');
    });
    this._cardHelpButton.addEventListener('click', () => {
      this._handleCardClick(this._id);
    });
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
    this._cardPreview = this._cardElement.querySelector('.slide__preview');
    this._cardDescription = this._cardElement.querySelector(
      '.slide__description'
    );
    this._cardRequest = this._cardElement.querySelector('.slide__request');
    this._cardResume = this._cardElement.querySelector('.slide__resume');

    this._cardHelpButton = this._cardElement.querySelector('.slide__link');

    this._cardName.textContent = this._name;
    this._cardAge.textContent = this._age;
    this._cardImage.src = `./images/children/${this._src}.png`;
    this._cardImage.alt = this._name;
    this._cardTarget.textContent = this._target;
    this._cardCurrentSum.textContent = `${this._currentSum} ₽`;
    this._cardLimit.textContent = `${this._limit} ₽`;
    this._cardProgressBar.value = this._currentSum;
    this._cardProgressBar.max = this._limit;
    this._cardPreview.textContent = this._preview;
    this._cardDescription.textContent = this._description;
    this._cardRequest.textContent = this._request;
    this._cardResume.textContent = this._resume;
    this._setEventListeners();

    return this._cardElement;
  };
}
