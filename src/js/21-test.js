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
