const name = "ajay"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("PubG");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('G'));

const newString = gameName.substring(1, 3);
// console.log(newString);

const anotherString = gameName.slice(-8, 3)
// console.log(anotherString);

const newStringOne = "     AjayVish    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ajay.com/hitesh%20Choudhary";
// console.log(url);
// console.log(url.replace('%20', '-'));

console.log(url.includes('ajay'));

const randomString = new String("battle-royal-game");

console.log(randomString.split('-'));






