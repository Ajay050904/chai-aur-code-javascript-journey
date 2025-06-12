// singleton - only a type of itslef (object.create())
/*
jab object literals ki tarah ho to singleton nhi bnta jabki constructor se agar bn rha h to singleton hoga 
*/ 

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "jaya",
    fullName : "jaya bacchan",
    mySym : "mykey1",
    age : 45,
    location : "Jaipur",
    email : "jaya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

console.log(jsUser.name);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.fullName);
console.log(jsUser["fullName"]);



