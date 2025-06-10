// arrays

const myArr = [4, 5, 8, 9, 6, 1, 2];
// console.log(myArr[0]);
const myArr2 = new Array(4, 5, 6, 7);
// console.log(myArr2[2]);

// arrays methods

// myArr.push(15);
// myArr.push(18);
// myArr.pop(); // removes last value

// myArr.unshift(45);
// myArr.shift(); // removes first value

// console.log(myArr);


// console.log(myArr.includes(8));
// console.log(myArr.includes(54));

// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(78));


const newArr = myArr.join();
// console.log(myArr);

// console.log(newArr);
// console.log( typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // (1, 3]

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);

console.log(myn2);


