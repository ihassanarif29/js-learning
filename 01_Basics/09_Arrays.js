const myArray = [1, 2, 3, 4, 5, 6, 7];
const heros = ["Ali", "Omer", "Usman", "Abubakkar"];
const myArray2 = new Array(5, 6, 7, 8, 9, 10);

//console.log(myArray[3]);

// // Add new value into array
// myArray.push(8);
// console.log(myArray);

// // Remove last value from the array
// myArray.pop();
// console.log(myArray);

// // Add new value to the start index
// myArray.unshift(0);
// console.log(myArray);

// // Remove first value form the array
// myArray.shift();
// console.log(myArray);

//console.log(myArray.includes(7));
//console.log(myArray.indexOf(5));

// const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof myArray);
// console.log(newArray);
// console.log(typeof newArray);

// Slice, Splice
// console.log("Orignal Array = ", myArray);

// const myNewArray1 = myArray.slice(1, 3);
// console.log("New Slice Array = ", myNewArray1);
// console.log("Orignal Array = ", myArray);

// const myNewArray2 = myArray.splice(1, 3);
// console.log("New Splice Array = ", myNewArray2);
// console.log("Orignal Array = ", myArray);

// const marvel_heros = ["thor", "ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// //marvel_heros.push(dc_heros);
// //console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// //Spread Arrays(Example like shatered glass)
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

const complex_array = [1, 2, 3, [(4, 5, 6)], 7, [8, 9, [0, 1, 2, 3]]];
const usable_simple_array = complex_array.flat(Infinity);
console.log(usable_simple_array);

console.log(Array.isArray("Hassan"));
console.log(Array.from("Hassan"));

console.log(Array.from({ name: "hassan" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
