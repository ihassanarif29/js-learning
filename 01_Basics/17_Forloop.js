// Forloop
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// }

// // Print Tables
// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }

// Break and Continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of index is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of index is ${index}`);
}
