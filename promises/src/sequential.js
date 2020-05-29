"use strict";

// Chaining functions -> not a lot of indentation like when using callbacks

const promise = new Promise((resolve, eject) => {
  setTimeout(() => {
    console.log("a");
    resolve("a is done");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
    let promise = new Promise((resolve, eject) => {
      setTimeout(() => {
        console.log("b");
        resolve("b is done");
      }, 2000);
    });
    return promise;
  })
  .then((result) => {
    console.log(result);
    let promise = new Promise((resolve, eject) => {
      setTimeout(() => {
        console.log("c");
        resolve("c is done");
      }, 2000);
    });
    return promise;
  })
  .then((result) => {
    console.log(result);
  });

console.log("Waiting..");

// Promise.resolve("a").then((result) => {
//   console.log(result).then(() => {
//     console.log("b");
//   });
// });
