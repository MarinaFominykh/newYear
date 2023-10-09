export class FormValues {
  constructor({ submitForm }) {
    this._submitForm = submitForm;
    this._form = document.forms.donations;
    this._inputList = Array.from(this._form.querySelectorAll('.input'));
  }

  //Получение значения полей формы:
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      if (input.type === 'radio' && input.checked) {
        this._formValues[input.name] = input.value;
      } else if (input.type !== 'radio') {
        this._formValues[input.name] = input.value;
      }
    });

    return this._formValues;
  }
  // Подписка на сабмит
  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  //Очистка формы
  reset() {
    this._form.reset();
  }
}
