// function printMyName() {
//   console.log("H");
//   console.log("A");
//   console.log("S");
//   console.log("S");
//   console.log("A");
//   console.log("N");
// }

// printMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4);
// console.log(result);

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   //console.log("This line is loged :)");
  //   return result;
  //   //console.log("This line is not loged :(");

  return number1 + number2;
}

const result = addTwoNumbers(4, 5);
//console.log(result);

function loginUserMessage(username = "admin") {
  //if (username === undefined) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage());

function calculateCartPrice(...number) {
  return number;
}
//console.log(calculateCartPrice(100, 200, 300));

const product = {
  name: "burger",
  price: 199,
};

function handleProduct(anyProduct) {
  console.log(
    `Product is ${anyProduct.name} and its price is ${anyProduct.price}`,
  );
}

//handleProduct(product);
handleProduct({ name: "sandwitch", price: 299 });
