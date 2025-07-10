class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}nayan`;
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(val) {
    this._email = val;
  }
}

const user1 = new User("raman@gmail.com", "ram345");
console.log(user1.password);
console.log(user1.email);
