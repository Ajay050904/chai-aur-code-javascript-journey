const user = {
  username: "Ajay",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);
// browser me global object - window object hota hai yha pe empty {} object

// function chai() {
//   let username = "Ajay"
//   console.log(this.username);
// }
// chai() // undefined - because we can't use 'this' in the function

// const chai = function () {
//   let username = "Ajay"
//   console.log(this.username);
// }
// chai() // undefined - as well because we can't use 'this' in the function

// const chai = ()=> {
//   let username = "Ajay"
//   console.log(this.username);
// }
// chai() // undefined

// Arrow functions

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(4, 5));

// implicit definition
const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); // by using () - to return object
// const addTwo = (num1, num2) => ({username : "SAM"}); // without () undefined dega
// console.log(addTwo(4, 9));

// const myArr = [1, 5, 5, 7]
// myArr.forEach(()=>{})
