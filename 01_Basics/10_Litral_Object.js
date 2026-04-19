const mySymbol = Symbol("Key1");

// object literals
const JsUser = {
  name: "Hassan",
  "full name": "Hassan Arif",
  [mySymbol]: "myKey1",
  age: 29,
  location: "Lahore",
  email: "hassan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

// JsUser.email = "hassan@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "hassan@powersoft.com";
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello Js User");
};

JsUser.greeting_user = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greetings());
console.log(JsUser.greeting_user());
