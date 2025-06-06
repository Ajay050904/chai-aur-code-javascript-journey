//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYtName = "JokerKiHaveli";
let anotherName = myYtName;
anotherName = "chaiAurCode"
console.log(myYtName);

console.log(anotherName);


let userOne = {
    email : "user@123google.com",
    upi : "ajay@123",
}

let userTwo = userOne;

userTwo.email = "vijay@123";

console.log(userOne);
console.log(userTwo);
