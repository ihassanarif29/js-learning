// For of

//["", "", ""]
//[({}, {}, {})];

// const arrayOne = [1, 2, 3, 4, 5];

// for (const num of arrayOne) {
//   console.log(num);
// }

// const greetings = "Hello Wrold!";

// for (const greet of greetings) {
//   console.log(`Each Character is = ${greet}`);
// }

// Maps
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States Of Ameriaca");
// map.set("PK", "Pakistan");
// map.set("FR", "France");
// //console.log(map);
// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// For In
// const myObject = {
//   game1: "NFS",
//   game2: "Taken",
//   game3: "Mario",
// };

// const myObject = {
//   js: "JavaScript",
//   ts: "TypeScript",
//   cpp: "C++",
//   rb: "Ruby",
//   swift: "Swift by Apple",
// };

// for (const key in myObject) {
//   //console.log(key);
//   //console.log(myObject[key]);
//   console.log(`${key} is shortcut for ${myObject[key]}`);
// }

// const programing = ["js", "rb", "py", "java", "cpp"];
// for (const key in programing) {
//   //console.log(key);
//   console.log(programing[key]);
// }

// Foreach Loop
const coding = ["javascript", "ruby", "python", "java", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function PrintMe(something) {
//   console.log(something);
// }
// coding.forEach(PrintMe);

// coding.forEach((item, index, arr) => {
//   //console.log(item);
//   //console.log(index);
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
