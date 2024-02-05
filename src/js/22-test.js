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
