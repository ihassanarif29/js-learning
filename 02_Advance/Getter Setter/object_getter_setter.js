const User = {
  _email: "h@gmail.com",
  _password: "pwdabc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password;
  },

  set password(value) {
    this._password = value;
  },
};


const umair = Object.create(User)
console.log(umair.email);
