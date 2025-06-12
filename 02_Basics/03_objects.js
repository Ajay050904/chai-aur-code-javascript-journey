// singleton - only a type of itslef (object.create())
/*
jab object literals ki tarah ho to singleton nhi bnta jabki constructor se agar bn rha h to singleton hoga 
*/ 

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "jaya",
    fullName : "jaya bacchan",
    // mySym : "mykey1", // not a key when you check its datatype
    [mySym] : "myKey1", // now its a symbol
    age : 45,
    location : "Jaipur",
    email : "jaya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.fullName);
// console.log(jsUser["fullName"]);

// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);

// how to add symbol in object
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
 
// to change
jsUser.email = "jayabachhan@gamil.com";

// to lock (means no one can change)
// Object.freeze(jsUser);

jsUser.age = 80;
// console.log(jsUser.age);
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello! JS USer");
}

console.log(jsUser.greeting); // reference of function 
console.log(jsUser.greeting()); 

jsUser.greeting2 = function() {
    console.log(`Hello! JS User, ${this.name}`);
}
console.log(jsUser.greeting2()); 


