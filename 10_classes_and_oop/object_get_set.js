const User = {
  _email: "raman@gmail.com",
  _password: "ram353",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

// factory funstion
const tea = Object.create(User)
console.log(tea.email);
