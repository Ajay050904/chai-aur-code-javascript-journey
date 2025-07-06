let myName = "Naman     ";
let myChannel = "NaYT     ";

// console.log(myName.trueLength); // trim().length

let myHeros = ["Thor", "SpiderMan"];
let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.Naman = function () {
  console.log(`Naman is present in all objects`);
};

// her
// oPower.Naman();
myHeros.Naman();

Array.prototype.heyNaman = function () {
  console.log("Naman says heloo");
};
myHeros.heyNaman();
// heroPower.heyNaman(); // it will not get access

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
