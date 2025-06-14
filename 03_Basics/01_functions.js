function sayMyName() {
  console.log("AJaY");
}
// sayMyName();
// sayMyName();
// sayMyName();

function addTwoNumbers(a, b) {
  console.log(a + b);
}
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null); // 3

function addTwoNumber(a, b) {
//   let result = a + b;
//   return result;
    return a + b;
}
const ans = addTwoNumber(5, 8);
// console.log(ans);

function loginUserMessage(userName) {
  // function loginUserMessage(userName == "sam") // to add default value  
  // if(userName === undefined) {
  if(!userName) {
    console.log("Please enter a username");
    return;
  }
    return `${userName} just logged in`;
}
// console.log(loginUserMessage("Naman"));
// console.log(loginUserMessage());

// to take multiple arguments
function calculateCartPrice(...num1) { // ... -> rest operator (spred)
  return num1; // returns array
}
// console.log(calculateCartPrice(200, 400, 600));

const user = {
  username : "ajay",
  price : 199
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  username : "sam",
  price : 45
})

const myNewArray = [200, 100, 500, 600]

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([4, 5, 6, 7])); 
