const tinderUser1 = new Object();
// console.log(tinderUser1); // singleton object
const tinderUser2 = {};
// console.log(tinderUser2); // non-singleton object

tinderUser2.id = "123abc";
tinderUser2.name = "Mohan";
tinderUser2.isLoggedIn = false;
// console.log(tinderUser2);

const regularUser = {
  email: "some@google.com",
  fullName: {
    userFullName: {
      firstName: "jaya",
      lastName: "bacchan",
    },
  },
};

// console.log(regularUser.fullName.userFullName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const objX = {
  5: "e",
  6: "f",
};
// const obj3 = {
//     obj1, obj2
// }
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2); // use this
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, objX); // use this  {} -> it is used as target and remaining all as source
// console.log(obj3);

// what you actually use is -

const obj3 = { ...obj1, ...obj2, ...objX }; // spread
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail,com",
  },
  {
    id: 2,
    email: "i@gmail,com",
  },
  {
    id: 3,
    email: "g@gmail,com",
  },
  {
    id: 4,
    email: "k@gmail,com",
  },
  {
    id: 4,
    email: "l@gmail,com",
  },
];
console.log(users[1].email);
// console.log(tinderUser2);
// console.log(Object.keys(tinderUser2)); // returns arrays of keys
// console.log(Object.values(tinderUser2)); // returns arrays of values
// console.log(Object.entries(tinderUser2));
// console.log(tinderUser2.hasOwnProperty('isLoggedIn'));
