/*
const book = { title: 'The Last Kingdom', author: 'Bernard Cornwell' };

// Додамо картинку обкладинки якщо її немає в об'єкті книги
const {
  title,
  coverImage = 'https://via.placeholder.com/640/480',
  author,
} = book;

console.log(title);
// "The Last Kingdom"
console.log(author);
// "Bernard Cornwell"
console.log(coverImage);
// "https://via.placeholder.com/640/480"
*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
