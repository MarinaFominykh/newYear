import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { Popup } from '../components/Popup.js';
import { sectionSelector, templateSelector } from '../utils/constans.js';
import { initialCards } from '../data/cards.js';

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

cardList.renderItems();

function getCard(data) {
  const card = new Card(data, templateSelector, handleCardClick);
  return card.getCard();
}

const popup = new Popup();
popup.setEventListeners();

function handleCardClick(
  name,
  age,
  src,
  target,
  currentSum,
  limit,
  description
) {
  popup.open(name,
  age,
  src,
  target,
  currentSum,
  limit,
  description)
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
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
