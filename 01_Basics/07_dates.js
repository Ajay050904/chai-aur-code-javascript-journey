// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2025, 5, 8);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2025, 5, 8, 5, 3);
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2025-05-09");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+ 1);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {weekday : "long"
})