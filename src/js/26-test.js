/*
function doStuffWithBook(title, numberOfPages, downloads, rating, isPublic) {
  // Робимо щось із параметрами
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  console.log(rating);
  console.log(isPublic);
}
// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook('Остання королівство', 736, 10283, 8.38, true);
*/

/*
function doStuffWithBook(book) {
  // Робимо щось із властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: 'Останнє королівство',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
*/

/*
// Це можна зробити у тілі функції.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}
*/

/*
// Або в сигнатурі (підписи) різниці немає.
function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  console.log(rating);
  console.log(isPublic);
}
*/

// Change code below this line
function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
