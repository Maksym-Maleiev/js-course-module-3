/*
const book = {
  title: 'The Last Kingdom',
  автор: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};
const accessType = book.public ? 'публічному' : 'закритому';
const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться у ${accessType} доступі.`;

console.log(message);
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage);
// undefined
const accessType = isPublic ? 'публічному' : 'закритому';
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться у ${accessType} доступі.`;

console.log(message);
*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
