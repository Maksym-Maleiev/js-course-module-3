/*
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog);
// {name: 'Mango'}
console.log(dog.name);
// 'Mango'
console.log(dog.legs);
// 4

// ❌ Повертає true для всіх властивостей
console.log('name' in dog);
// true
console.log('legs' in dog);
// true

// ✅ Повертає true лише для власних властивостей
console.log(dog.hasOwnProperty('name'));
// true
console.log(dog.hasOwnProperty('legs'));
// false
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
  // Якщо це не власна властивість - нічого не робимо
}
*/

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  keys.push(key);
  values.push(apartment[key]);

  if (apartment.hasOwnProperty(key)) {
    console.log(key);
    console.log(apartment[key]);
  }

  // Change code above this line
}

console.log(keys);
console.log(values);
