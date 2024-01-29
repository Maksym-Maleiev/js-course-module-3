/*
const propName = 'name';
const user = { age: 25 };
user[propName] = 'Harry Potter';
console.log(user.name);
// "Harry Potter"
*/

const propName = 'name';
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: 'Harry Potter',
};
console.log(user.name);
// "Harry Potter"
