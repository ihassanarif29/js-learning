const user = {
  username: "Hassan",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from the database");
    //console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
//user.getUserDetails();
//console.log(user.username);
//console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// const userOne = User("Hassan Arif", 5, true);
// const userTwo = User("Arfa Arif", 16, false);

const userOne = new User("Hassan Arif", 5, true);
const userTwo = new User("Arfa Arif", 16, false);

console.log(userOne);
