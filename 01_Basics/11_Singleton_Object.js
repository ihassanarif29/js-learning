// singleton
//Object.create

const pixellogicUser = new Object();
pixellogicUser.id = "abc123";
pixellogicUser.name = "hassan";
pixellogicUser.isLogedIn = false;

//console.log(pixellogicUser);

const regularUser = {
  email: "someone@gmail.com",
  userfullname: {
    fullname: {
      firstname: "hassan",
      lastname: "arif",
    },
  },
};

//console.log(regularUser.userfullname.fullname.firstname);

const objectOne = { name: "hasan", email: "hassan@gmail.com" };
const objectTwo = { phone: 3456789, address: "1 Street Gulbahar" };

//const objectThree = { objectOne, objectTwo };
//const objectThree = Object.assign(objectOne, objectTwo);
//const objectThree = Object.assign({}, objectOne, objectTwo);
const objectThree = { ...objectOne, ...objectTwo };

//console.log(objectThree);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
  {
    id: 4,
    email: "d@gmail.com",
  },
  {
    id: 5,
    email: "e@gmail.com",
  },
];

//console.log(users[3].email);

// console.log(pixellogicUser);
// // Get all keys of the object
// console.log(Object.keys(pixellogicUser));
// // Get all values of the object
// console.log(Object.values(pixellogicUser));

// console.log(Object.entries(pixellogicUser));

// console.log(pixellogicUser.hasOwnProperty("isLogedIn"));
// console.log(pixellogicUser.hasOwnProperty("isLoged"));

// Deconstruct object

const course = {
  course_name: "android studio",
  course_price: 999,
  course_instructor: "hassan arif",
};

// const { course_instructor } = course;
// console.log(course_instructor);

const { course_instructor: instructor } = course;
console.log(instructor);
