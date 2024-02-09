/*
const firstBook = {
  title: 'Останнє королівство',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;

console.log(firstTitle);
// Останнє королівство
console.log(firstCoverImage);
// https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = { title: 'Сон смішної людини' };

const {
  title: secondTitle,
  coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
} = secondBook;

console.log(secondTitle);
// Сон смішної людини
console.log(secondCoverImage);
// https://via.placeholder.com/640/480
*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
