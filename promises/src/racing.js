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

Promise.race([p1, p2, p3])
  // Only resolve for the first task. The other task keeps executing but their result is not procesed
  .then((result) => {
    console.log("Race is over");
    console.log(result);
  })
  // The catch only executes for the first task to finish (if it is rejected)
  .catch((error) => {
    console.log("Failed");
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
