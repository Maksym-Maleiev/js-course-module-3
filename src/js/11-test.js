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
