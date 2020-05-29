"use strict";

let counter = 0;

const doAsync = (doesResolve, timeout) =>
  new Promise((resolve, reject) => {
    let currentCounter = ++counter;
    setTimeout(() => {
      if (doesResolve) {
        console.log("Success - Task:", currentCounter);
        resolve({ msg: "Resolved", currentCounter });
      } else {
        console.log("Failure - Task:", currentCounter);
        reject({ msg: "Rejected", currentCounter });
      }
    }, timeout);
  });

const p1 = doAsync(true, 1000);
const p2 = doAsync(true, 500);
const p3 = doAsync(true, 2000);

Promise.all([p1, p2, p3])
  // Only resolve if all task are resolved
  .then((result) => {
    console.log("All done!");
    console.log(result);
  })
  // If a least one promise fail, an error is thrown
  .catch((error) => {
    console.log("Faillure");
    console.log(error);
  });

/**************************************/

// Concurent async tasks
// let counter = 0;

// counter++;
// setTimeout(() => {
//   console.log("a");
//   counter--;
//   if (counter === 0) allDone();
// }, 1000);

// counter++;
// setTimeout(() => {
//   console.log("b");
//   counter--;
//   if (counter === 0) allDone();
// }, 500);

// counter++;
// setTimeout(() => {
//   console.log("c");
//   counter--;
//   if (counter === 0) allDone();
// }, 2000);

// function allDone() {
//   console.log("All done!");
// }

// console.log("Counter:", counter);
