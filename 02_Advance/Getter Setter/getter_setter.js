class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return ` the password is = ${this._password}`;
  }

  set password(value) {
    this._password = value;
  }
}

const hassan = new User("hassan@gmail.com", "abc12345");
console.log(hassan.password);
