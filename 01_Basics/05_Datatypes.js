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

//console.log(id === anotherId);

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

//console.log(typeof scoreValue);



//==============================================
// Stack Memory, Heap Memory
//==============================================
// Stack memory is used where primitive variable is used
// Heap memoty is used where non-primotive variable is used

// Stack memoty example
let myVariable = "Hassan"
let myAnotherVariable = myVariable
myAnotherVariable = "Another Name"
console.log(myAnotherVariable)
console.log(myVariable)



let userOne = {
    name: "Hassan",
    email: "hassan@gmail.com",
    address: "h1 jinnah street"
}

let userTwo = userOne
userTwo.email = "newhassan@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


