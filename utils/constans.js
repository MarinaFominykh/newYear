const sectionSelector = '.slides';
const templateSelector = '.card-template';
const donationsFormSelector = '.donations__form';
const personalFormSelector = '.personal-donation';
const shareLink = document.querySelector('.share-link');
const donations = document.querySelectorAll('.donations__item');
const slideButtons = document.querySelectorAll('.slide__button');
const progress = document.querySelector('.progress__line');
const progressValue = document.querySelector('.progress__span_curent-sum');

export {
  sectionSelector,
  templateSelector,
  shareLink,
  donations,
  slideButtons,
  donationsFormSelector,
  personalFormSelector,
  progress,
  progressValue,
};
