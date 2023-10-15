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
  progressValue,
  KEY,
  MERCHANT_CAMPAIGN_ID,
} from '../utils/constans.js';
import { getTotalSum, addSpaces, copyURL } from '../utils/functions.js';
import { initialCards } from '../data/cards.js';

let id;
progressValue.textContent = `${addSpaces(
  getTotalSum(initialCards, 'currentSum')
)} ₽`;

const popup = new Popup();

//открытие и закрытие модального окна:
popup.setEventListeners();

//Общая форма сбора:
const formDonations = new FormValues(
  {
    submitForm: (data) => {
      sendPay(data);
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
      sendPay(data);
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
function handleCardClick(_id, _name) {
  id = _id;
  popup.open(_name);
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


// Копирование ссылки на страницу в буфер:
shareLink.addEventListener('click', () => copyURL(shareLink));

// Приведение суммы к минорным единицам:
function addTwoZeros(string) {
  let number = parseInt(string);
  number = number * 100;
  return number;
}

function sendPay(data) {
  const { name, email, company, otherSum, sum: selectedSum } = data;
  const sum = addTwoZeros(otherSum || selectedSum);
  let options = {
    widget_key: KEY,
    amount: sum,
    merchant_fields: {
      name,
      email,
      company,
    },
    merchant_campaign_id: MERCHANT_CAMPAIGN_ID,
    user_fundraising_program_id: id || MERCHANT_CAMPAIGN_ID,
    payment_scheme: 'double',
    user_email: email,
  };

  let M = new Mixplat(options);
  M.build();
  M.setSuccessCallback(function (o, i) {
    popup.close();
  });
}
