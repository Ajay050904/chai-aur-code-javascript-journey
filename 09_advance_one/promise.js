const promiseOne = new Promise(function (resolve, rejecet) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});
