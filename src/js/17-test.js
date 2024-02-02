/*
const books = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38 },
  { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51 },
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    rating: 7.75,
  },
];

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
*/

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);
