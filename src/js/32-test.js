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
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
  // Change code above this line
}
