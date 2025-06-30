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

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "js321" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// another approact to accept
// async await
// used in DB connection
async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromise();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("E:", err);
//   }
// }

// getAllUsers();

// now by then and catch
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// promise.all
// yes this is also available, kuch reading aap b kro.
