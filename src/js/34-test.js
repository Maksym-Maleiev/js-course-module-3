/*
// ✅ Логієски та синтаксично згруповані сутності
const bookShelf = {
  books: ['Остання королівство', 'Вартовий снів'],
  // Це метод об'єкта
  getBooks() {
    console.log('Цей метод буде повертати всі книги - властивість books');
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log('Цей метод буде додавати нову книгу у властивість books');
  },
};

// Виклики методів
bookShelf.getBooks();
bookShelf.addBook('Нова книга');
*/

/*
// ❌ Слабозв'язані, незалежні сутності
const books = [];
function getBooks() {}
function addBook() {}
*/

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // Change code above this line
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook('Haze'));
console.log(bookShelf.removeBook('Red sunset'));
console.log(bookShelf.updateBook('Sands of dune', 'Dune'));
