const userEmail ="ram@123gmail.com";
if(userEmail) {
    console.log("GOt user email");
} else {
    console.log("Don;t have user email");
}

// false values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values -> true, 1, "0", 'false', " ", [], {}, function(){} 

// const userEmail = []
// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator

// condition ? true : false 
const iceTeaPRice = 100;
iceTeaPRice <= 80 ? console.log("Less than 80") : console.log("more than 80");
