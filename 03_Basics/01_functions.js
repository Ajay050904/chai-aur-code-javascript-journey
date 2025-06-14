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

