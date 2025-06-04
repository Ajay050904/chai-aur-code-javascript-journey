let score = 33
// console.log(typeof score);
let scoore = "33"
// console.log(typeof (scoore));

let valueNumber = Number(scoore)
// console.log(typeof valueNumber);
// console.log(valueNumber);

// console.log(Number("33abc")) // NaN
// same with undefined, string

/*
"33" -> 33
"33abc" -> NaN
"true" -> 1 , "false" -> 0
"" & 0 -> false (in boolean)
"ajay" -> true
*/ 

let isLogged = 1;
let isBooleanLooged = Boolean(isLogged);
// console.log(isBooleanLooged);

let no = 999
// console.log(String(no));
let stringNO = String(no)
// console.log(typeof stringNO);

// ***************** Operations *****************

let value = 4
let negValue = -value;
// console.log(negValue);

// console.log(2**3); // 2^3 = 8

let str1 = "hello"
let str2 = "aman"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122 not 14
// console.log("1" + (2 + 2)); // now 14
// console.log(1 + 2 + "2"); // 32 not 5
// console.log((1 + 2) + "2"); // now still 32

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 8*5;

console.table([num1, num2, num3]);

let gameCounter = 100;
++gameCounter
console.log(gameCounter);


