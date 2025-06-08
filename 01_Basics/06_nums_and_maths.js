const score = 400;
// console.log(score, typeof score);

const balance = new Number(500);
// console.log(balance, typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8956;
// console.log(otherNumber.toPrecision(4));

const hunderds = 1000000;
// console.log(hunderds.toLocaleString('en-IN'));

// ********** Maths ****************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3), Math.round(4.6));
// console.log(Math.ceil(4.2), Math.floor(4.9));

console.log(Math.min(4, 5, 6, 8));

console.log(Math.random()); // 0-1

console.log((Math.random()*10) + 1); // 1.26454, 4.4546, 9.6646
console.log((Math.floor(Math.random()*10))+ 1); // above 1 and end anywhere

// to specific range
const min = 10;
const max = 30;

console.log(Math.floor((Math.random()* (max-min +1))+ min));




