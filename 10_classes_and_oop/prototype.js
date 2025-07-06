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

Array.prototype.heyNaman = function() {
    console.log('Naman says heloo');
}
myHeros.heyNaman();
// heroPower.heyNaman(); // it will not get access
