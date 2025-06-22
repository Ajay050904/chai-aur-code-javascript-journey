const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addedNumers = myNumers.map((num) => {
  // you can do same with for each loop
  return num + 10;
});
// console.log(addedNumers);

// chaining
const newNums = myNumers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter( (num)=> num >= 40);
// console.log(newNums);

