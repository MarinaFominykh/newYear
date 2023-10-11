import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { Popup } from '../components/Popup.js';
import { FormValues } from '../components/FormValues.js';
import {
  sectionSelector,
  templateSelector,
  shareLink,
  donationsFormSelector,
  personalFormSelector,
  progress,
  progressValue

} from '../utils/constans.js';
import { initialCards } from '../data/cards.js';

// Атрибуты для прогресс-бара
const getTotalSum = (arr, field) => {
  let progressAttribute = 0;

  for (let i = 0; i < arr.length; i++) {
    progressAttribute += arr[i][field];
  }
  return progressAttribute;
};

window.addEventListener('load', () => {
  progress.setAttribute('max', getTotalSum(initialCards, 'limit'))
  progress.setAttribute('value', getTotalSum(initialCards, 'currentSum'))
  });
  progressValue.textContent = `${getTotalSum(initialCards, 'currentSum')} ₽`



const popup = new Popup();

//открытие и закрытие модального окна:
popup.setEventListeners();

//Общая форма сбора:
const formDonations = new FormValues(
  {
    submitForm: (data) => {
      //Если нужна доп. функциональность при сабмите формы, можно добавить сюда
      console.log('данные общей формы пожертвований=>', data);
      formDonations.reset();
    },
  },
  donationsFormSelector
);

// Отправка формы:
formDonations.setEventListeners();

// Персональная форма сбора:
const formPersonalDonation = new FormValues(
  {
    submitForm: (data) => {
      //Если нужна доп. функциональность при сабмите формы, можно добавить сюда
      console.log('данные персональной формы пожертвований=>', data);
      popup.close();
      formPersonalDonation.reset();
    },
  },
  personalFormSelector
);

//Отправка формы:
formPersonalDonation.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = getCard(data);
      cardList.addItem(cardElement);
    },
  },
  sectionSelector
);

// рендер слайдов:
cardList.renderItems();

// генерация слайдов:
function getCard(data) {
  const card = new Card(data, templateSelector, handleCardClick);
  return card.getCard();
}

//обработка клика по кнопке "узнать историю"
function handleCardClick(id) {
  popup.open(id);
}

// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  centeredSlides: false,
  speed: 800,
  simulateTouch: true,
  breakpoints: {
    705: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.3,
    },
    960: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

function copyURL() {
  let currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then(function () {
      shareLink.dataset.tooltip = 'Ссылка скопирована';
      console.log('Текст скопирован');
    })
    .catch(function (err) {
      shareLink.dataset.tooltip = 'Ошибка при копировании';
    });
}

// Копирование ссылки на страницу в буфер:
shareLink.addEventListener('click', copyURL);
