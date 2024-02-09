/*
const temps = [14, -4, 25, 8, 11];
// У консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps));
// NaN

// У консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розпорошимо колекцію елементів як окремі аргументи
console.log(Math.max(...temps));
// 25
*/

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore);
