// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

//console.log(Math.PI);
//const myNewObject = Object.create(null)

const myObj = {
  name: "coffe",
  price: 500,
  isAvailable: true,

  orderCoffe: function () {
    console.log("Code fat gyia");
  },
};

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// Object.defineProperty(myObj, "name", {
//   writable: false,
//   enumerable: false,
// });

Object.defineProperty(myObj, "name", {
  enumerable: false,
});

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (let [key, value] of Object.entries(myObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
