/*
const bookShelf = {
  books: ['Останнє королівство'],
  getBooks() {
    console.log(this);
  },
};
// Перед точкою стоїть об'єкт bookShelf,
// тому при виклику методу це буде зберігати посилання на нього.
bookShelf.getBooks();
// {books: ["Остання королівство"], getBooks: f}
*/

/*
const bookShelf = {
  books: ['Останнє королівство'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks());
// ["Остання королівство"]
bookShelf.addBook('Мгла');
bookShelf.addBook('Вартовий снів');
console.log(bookShelf.getBooks());
// ["Остання королівство", "Мгла", "Вартовий снів"]
bookShelf.removeBook('Мгла');
console.log(bookShelf.getBooks());
// ["Остання королівство", "Вартовий снів"]
*/

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);

    this.books.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
bookShelf.updateBook('The last kingdom', 'Dune');
console.log(bookShelf);
