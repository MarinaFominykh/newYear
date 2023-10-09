import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { Popup } from '../components/Popup.js';
import { FormValues } from '../components/FormValues.js';
import {
  sectionSelector,
  templateSelector,
  shareLink,
} from '../utils/constans.js';
import { initialCards } from '../data/cards.js';


const form = new FormValues({
  submitForm: (data) => {
    //Если нужна доп. функциональность при сабмите формы, можно добавить сюда
    console.log(data)
    form.reset();
  },
});

// Отправка формы:
form.setEventListeners();


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

const popup = new Popup();

//открытие и закрытие модального окна:
popup.setEventListeners();

//обработка клика по кнопке "узнать историю"
function handleCardClick(
  name,
  age,
  src,
  target,
  currentSum,
  limit,
  description
) {
  popup.open(name, age, src, target, currentSum, limit, description);
}

// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  centeredSlides: false,
  speed: 800,
  simulateTouch: true,
  // grabCursor: true,
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
