// Object Literal

const user = {
  username: "ajay",
  loginCount: 9,
  signedIn: true,

  getUserDetails() {
    console.log("Got user details from database");
    // console.log(this.username , " ", this.loginCount, " ", this.signedIn);
    console.log(`Username: ${this.username}`);
    // console.log(this); // here you will get current
  },
};
// console.log(user.username);
// user.getUserDetails();
// console.log(this); // {}

// Constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
