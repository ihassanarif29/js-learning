//const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

// Filer Example
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum.filter((num) => num > 4);
// console.log(newNum);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum.filter((num) => {
//   return num > 5;
// });
// console.log(newNum);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = [];
// myNumbers.forEach((number) => {
//   if (number > 4) {
//     newNumbers.push(number);
//   }
// });
// console.log(newNumbers);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: "1981", edition: "2004" },
//   { title: "Book Two", genre: "Non-Fiction", publish: "1984", edition: "2007" },
//   { title: "Book Three", genre: "Fiction", publish: "1991", edition: "2004" },
//   { title: "Book Four", genre: "History", publish: "1997", edition: "2009" },
//   { title: "Book Five", genre: "Science", publish: "1999", edition: "2009" },
//   { title: "Book Six", genre: "History", publish: "1995", edition: "2023" },
//   { title: "Book Seven", genre: "Fiction", publish: "1988", edition: "2012" },
//   { title: "Book Eight", genre: "Science", publish: "1987", edition: "2015" },
//   { title: "Book Nine", genre: "Fiction", publish: "1989", edition: "2018" },
//   { title: "Book Ten", genre: "History", publish: "1993", edition: "2025" },
// ];

// let userBooks = books.filter((book) => book.genre === "History");
// userBooks = books.filter((book) => {
//   return book.publish > 1990 && book.genre === "History";
// });

// console.log(userBooks);

// Map Example
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const newNumbers = myNumbers.map((number) => number + 10);
// // Chaining Example
// const newNumbers = myNumbers
//   .map((number) => number * 10)
//   .map((number) => number + 1)
//   .filter((number) => number > 70);
// console.log(newNumbers);

// Reduce Example
// const myNumbers = [1, 2, 3, 4, 5];
// // const myTotal = myNumbers.reduce(function (accu, currval) {
// //   console.log(`accu: ${accu} and currval: ${currval}`);
// //   return accu + currval;
// // }, 0);
// const myTotal = myNumbers.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoppingCart = [
  { itemName: "laptop", price: 50000 },
  { itemName: "mobile", price: 35000 },
  { itemName: "charger", price: 5000 },
  { itemName: "headphone", price: 9000 },
  { itemName: "bag", price: 12000 },
];
const myTotal = shoppingCart.reduce((accu, item) => accu + item.price, 0);
console.log(myTotal);
