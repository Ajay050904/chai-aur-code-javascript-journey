class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    // stops access ot every object
    return `123`;
  }
}
const Nayan = new User("Nayan");
// console.log(Nayan.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const MAYAM = new Teacher("MAYAM", "mayam123@gmail.com");
MAYAM.logMe();
console.log(MAYAM.createId());

