// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB Calls , Cryptography, Network Calls
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 3000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB Calls , Cryptography, Network Calls
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 3000);
// }).then(function () {
//   console.log("Promise is Consumed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "hassan", email: "hassan@gmail.com" });
//   }, 3000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hassan", email: "hassan@gmail.com" });
//     } else {
//       reject("ERROR: Somthing went wrong");
//     }
//   }, 3000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The promise is resolved or rejected !");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hassan", password: "12345" });
//     } else {
//       reject("ERROR: Somthing went wrong");
//     }
//   }, 3000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
