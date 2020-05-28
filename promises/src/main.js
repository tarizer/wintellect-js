"use strict";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise is resolved");
    reject("There has been an error");
  }, 2000);
});

console.log("Waiting..");

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(Promise.resolve("Some value"));
console.log(
  Promise.reject("Another value").catch((error) => {
    console.log("Error catched", error);
  })
);
