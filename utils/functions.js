export const getTotalSum = (arr, field) => {
  let progressAttribute = 0;

  for (let i = 0; i < arr.length; i++) {
    progressAttribute += arr[i][field];
  }
  return progressAttribute;
};
export const addSpaces = (number) => {
  let string = number.toString();
  let result = "";
  let counter = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    counter++;
    result += string[i];
    if (counter % 3 === 0 && i !== 0) {
      result += " ";
    }
  }
  return result.split("").reverse().join("");
}

export const copyURL = (element) => {
  let currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then( () => {
      element.dataset.tooltip = 'Ссылка скопирована';
    })
    .catch((err) => {
      element.dataset.tooltip = 'Ошибка при копировании';
    });
}
