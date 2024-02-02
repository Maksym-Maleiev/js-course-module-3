const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код нижче за цей рядок
  let totalPrice = 0;

  for (const product of products) {
    if (product[productName] === product.name) {
      return (totalPrice = product.price * product.quantity);
    }
  }

  return totalPrice;
  // Пиши код вище за цей рядок
}

console.log(calculateTotalPrice('Blaster'));
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Droid'));
console.log(calculateTotalPrice('Grip'));
console.log(calculateTotalPrice('Scanner'));
