const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};
const bookTitle = book['title'];
console.log(bookTitle);
// "The Last Kingdom"

const bookGenres = book['genres'];
console.log(bookGenres);
// ["historical prose", "adventure"]

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor);
// "Bernard Cornwell"
