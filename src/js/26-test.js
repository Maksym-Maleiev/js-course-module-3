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
function calculateMeanTemperature(today, tomorrow) {
  const { todayLow, todayHigh } = today;
  const { tomorrowLow, tomorrowHigh } = tomorrow;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);

console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
);
