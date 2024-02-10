/*
// Як оголосити параметри функції так,
// щоб можна було передати будь-яку кількість аргументів?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
*/

/*
function multiply(...args) {
  console.log(args);
  // масив всіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
*/

// Change code below this line
function add(...args) {
  console.log(...args);
  let sum = 0;

  for (const arg of args) {
    sum += arg;
  }

  return sum;
  // Change code) above this line
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
