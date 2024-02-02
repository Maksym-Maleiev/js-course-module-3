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
