const firstBook = {
  title: 'Последнее королевство',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};
const {
  title: firstTitle,
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;
console.log(firstTitle); // Последнее королевство console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg const secondBook = { title: "Сон смешного человека", }; const { title: secondTitle, coverImage: secondCoverImage = "https://via.placeholder.com/640/480", } = secondBook; console.log(secondTitle); // Сон смешного человека console.log(secondCoverImage); // https://via.placeholder.com/640/480
