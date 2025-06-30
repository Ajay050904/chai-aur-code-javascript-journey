const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve(); // now connected with then()
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "Chai", email: "AJay@34gmail.com" }); // normally we pass object
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // if true we will get username in then()
    if (!error) {
      resolve({ username: "jaya", password: "jay123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; // can't hold it in any var
  })
  .then((username) => {
    console.log(username); // do error = true to get username
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally: The promise is resolved or rejected");
  });
