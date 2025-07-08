function setUserName(username) {
  // complex db calls
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username); // Bind to current this
  this.email = email;
  this.password = password;
}

const user1 = new createUser("Naman", "nam@123gmail.com", "na123");
console.log(user1);
