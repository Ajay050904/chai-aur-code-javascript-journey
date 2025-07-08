// ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}
const user1 = new User("Ajay", "aj123@gmail.com", "aj321");
console.log(user1.encryptPassword());
console.log(user1.changeUserName());

// behind the scene
function Usser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
Usser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const user2 = new Usser("Raman", "ram@3425gmail.com", "ram245");
console.log(user2.encryptPassword());
// same way you can use changeUserName()
