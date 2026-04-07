// Primitive Data Type
// Call by value
// Sting, Number, Boolean, null, undefined, Symbol, BigInt


const name = "hassan" // String defined
const score = 100 // Number defined
const scoreValue = 101.45 // Number defined
const isLoggedIn = false // Boolean defined
const outsideTemp = null // null defined

let userName = undefined // undefined value
let userEmail; // undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non-Primitive Data Type (Refrence Type)
// Call by refrence
// Arrays, Objects, Functions

const heros = ["Ali", "Omer", "Usman", "Abubakkar"];

let myObj = {
    name: "hassan",
    age: 29
}

const MyFunction = function () {
    console.log("Hello this is my function")
}

console.log(typeof scoreValue);