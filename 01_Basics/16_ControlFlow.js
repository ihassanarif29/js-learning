// if statement
// if (true) {
//   console.log("Condition is true and code block is run");
// }

// const isUserLoggedIn = false;
// if (isUserLoggedIn) {
//   console.log("User is logged in");
// } else {
//   console.log("User is not logged in");
// }

// Conditional Operators
// <, >, <=, >=, ==, !=
// Contitional Operator also check data type is ===, !==
// if (2 == "2") {
//   console.log("executed");
// }

// //Scope Example
// const score = 200;
// if (score > 100) {
//   //const power = "Flying";
//   let power = "Flying";
//   //var power = "Flying";
//   console.log(`User has ${power} power`);
// }
// //console.log(`User has ${power} power`);

//
// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = true;
// const loggedInFromEmail = false;

// if (userLoggedIn && debitCard) {
//   console.log("Allow to buy product");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User logged in from valid source");
// }

// // Switch Example
// const month = 3;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Aug");
//     break;
//   case 9:
//     console.log("Sep");
//     break;
//   case 10:
//     console.log("Oct");
//     break;
//   case 11:
//     console.log("Nov");
//     break;
//   case 12:
//     console.log("Dec");
//     break;

//   default:
//     console.log("Default case match");
//     break;
// }

// // Thruthy Values ( "anything", 'anthing', " ", [], {}, function(){},  )
// // Falsy Values (false, 0, -0, BigInt 0n, "", null, undefined, NaN)
// const userEmail = "hassan@gmail.com";

// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("do not got user email");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null, undefined

// let value1;
// //value1 = 5 ?? 10;
// //value1 = null ?? 10;
// value1 = undefined ?? 15;
// console.log(value1);

// Terniary Operator
// condition ? true : false

const currentTemprature = 45;
currentTemprature > 25
  ? console.log("Weather is Hot")
  : console.log("Weather is cold");
