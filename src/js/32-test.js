/*
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber);
  // Значення першого аргументу
  console.log(secondNumber);
  // Значення другого аргументу
  console.log(otherArgs);
  // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
*/

// Change code below this line
function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
