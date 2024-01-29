// ! Bad practice
/*
const propName = 'name';
const user = { age: 25 };
user[propName] = 'Harry Potter';
console.log(user.name);
// "Harry Potter"
*/

// * Good practice
/*
const propName = 'name';
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: 'Harry Potter',
};
console.log(user.name);
// "Harry Potter"
*/

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  // Change code above this line
};

console.log(credentials.email);
console.log(credentials.password);
