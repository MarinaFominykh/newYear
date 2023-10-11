export class Popup {
  constructor() {
    this._popup = document.querySelector('.popup');
    this._body = document.querySelector('.page');
    
  }

  open(id
  ) {
    this._popup.classList.add('popup_opened');
    this._body.classList.add('opened');
    document.addEventListener('keydown', this._handleEscClose);
    console.log('id ребенка =>', id)

  }
  close() {
    this._popup.classList.remove('popup_opened');
    this._body.classList.remove('opened');
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
      if (evt.target.classList.contains('close')) {
        this.close();
      }
    });
  }
}
