// for
for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Outer loop value  ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

// break and continue
for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    // console.log("Detected 5");
    break;
  }
  // console.log(`value of i is ${index}`);
}

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}
