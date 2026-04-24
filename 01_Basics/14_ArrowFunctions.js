const user = {
  username: "hassan",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    //console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "usman";
// user.welcomeMessage();

//console.log(this);

// function one() {
//   let username = "hassnarif";
//   console.log(this.username);
// }

// one();

// const two = function () {
//   let username = "hassan";
//   console.log(this.username);
// };

const two = () => {
  let username = "hassan";
  console.log(this.username);
};

//two();

// Explicit retun
// const addTwo = (number1, number2) => {
//   return number1 + number2;
// };

// Implicit return
//const addTwo = (number1, number2) => number1 + number2;

// Return Objct
const addTwo = (number1, number2) => ({ username: "hassan arif" });

console.log(addTwo(5, 7));
