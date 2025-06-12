const tinderUser1 = new Object()
// console.log(tinderUser1); // singleton object
const tinderUser2 = {}
// console.log(tinderUser2); // non-singleton object

// tinderUser2.id = "123abc";
// tinderUser2.name = "Mohan";
// tinderUser2.isLoggedIn = false;
// console.log(tinderUser2);
 

const regularUser = {
    email : "some@google.com",
    fullName : {
        userFullName : {
            firstName : "jaya",
            lastName : "bacchan"
        }
    }
}

console.log(regularUser.fullName.userFullName);
