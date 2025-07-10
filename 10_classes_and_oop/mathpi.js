const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI); // still same
const myNewObj = {
  name: "ginger",
  price: 250,
  isAvaliable: true,

  orderChai: function () {
    console.log("ordered");
  },
};
console.log(myNewObj);
console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

// define or alter your {object } properties of object

Object.defineProperty(myNewObj, "name", {
  // writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

for (let [key, value] of Object.entries(myNewObj)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
