// if

// if(true) { }
// if(false) { }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
}

if (2 === "2") {
  // === checks data type as well with value
  // console.log("yes");
} else {
  // console.log("no");
}

const tempratur = 42;
if (tempratur < 50) {
  // console.log("less than 50");
} else {
  // console.log("grater than 50");
}

const score = 100;
if (score > 50) {
  let power = "fly";
  // console.log(`user power:  ${power}`);
}

const balance = 1000;
// if(balance > 500) console.log("test");
// else console.log("No test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");  
} 
if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}