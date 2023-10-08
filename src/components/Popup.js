export class Popup {
  constructor() {
    this._popup = document.querySelector('.popup');
    this._image = this._popup.querySelector('.card__img');
    this._target = this._popup.querySelector('.card__target');
    this._name = this._popup.querySelector('.card__name');
    this._age = this._popup.querySelector('.card__age');
    this._currentSum=this._popup.querySelector('.card__span_sum');
    this._limit=this._popup.querySelector('.card__span_limit');
    this._progressBar = this._popup.querySelector('.card__progress');
    this._history = this._popup.querySelector('.card__preview');
  }

  open(name, age, src, target, currentSum, limit, description) {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
     this._name.textContent = name;
    this._age.textContent = age;
    this._image.src = `./images/${src}.png`;
    this._image.alt = name;
    this._target.textContent = target;
    this._currentSum.textContent= `${currentSum}₽`;
    this._limit.textContent = `${limit}₽`;
    this._progressBar.value = currentSum;
    this._progressBar.max = limit;
    this._history.textContent = description;
    
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}
