let score = 33
console.log(typeof score);
let scoore = "33"
console.log(typeof (scoore));

let valueNumber = Number(scoore)
console.log(typeof valueNumber);
console.log(valueNumber);

console.log(Number("33abc")) // NaN
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
console.log(isBooleanLooged);

let no = 999
console.log(String(no));
let stringNO = String(no)
console.log(typeof stringNO);

