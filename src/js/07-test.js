const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];
console.log(book.pageCount);
// 836
console.log(book.originalLanguage);
// "en"
console.log(book.translations);
// ["ua", "ru"]
