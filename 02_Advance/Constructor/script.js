// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abcHz`;
  }
}

const playerOne = new User("Hassan", "hassan@gmail.com", "xyz123");

console.log(playerOne.encryptPassword());
