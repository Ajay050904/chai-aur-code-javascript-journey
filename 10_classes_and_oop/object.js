function mulByFive(num) {
  return num * 5;
}
mulByFive.power = 2;
console.log(mulByFive(5));
console.log(mulByFive.power);
console.log(mulByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};
const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
chai.printMe();
chai.increment();
chai.printMe();
tea.printMe();
tea.increment();
tea.printMe();