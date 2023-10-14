const sectionSelector = '.slides';
const templateSelector = '.card-template';
const donationsFormSelector = '.donations__form';
const personalFormSelector = '.personal-donation';
const shareLink = document.querySelector('.share-link');
const donations = document.querySelectorAll('.donations__item');
const slideButtons = document.querySelectorAll('.slide__button');
const progress = document.querySelector('.progress__line-progress');
const progressValue = document.querySelector('.progress__span_curent-sum');
const KEY = 'c07ea3d2-b1cf-4806-ac51-10ea6581e2f2';
const MERCHANT_CAMPAIGN_ID = 'GNY2024';


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
  KEY,
  MERCHANT_CAMPAIGN_ID

};
