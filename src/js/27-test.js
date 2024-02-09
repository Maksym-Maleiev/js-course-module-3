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
