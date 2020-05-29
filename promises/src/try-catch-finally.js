"use strict";

let counter = 0;

const doAsync = (doesResolve) =>
  new Promise((resolve, reject) => {
    counter++;
    setTimeout(() => {
      if (doesResolve) {
        console.log("Success!", counter);
        resolve({ msg: "Resolved", counter });
      } else {
        console.log("Failure!", counter);
        reject({ msg: "Rejected", counter });
      }
    }, 1000);
  });

doAsync(true)
  .then(() => doAsync(true))
  .then(() => doAsync(true))
  .then(() => doAsync(false))
  .then(() => doAsync(true))
  .catch((error) => console.log(error.msg, error.counter))
  .then(() => {
    console.log("Finally");
  });

// doAsync(true)
//   .then((result) => {
//     console.log(result);
//     return doAsync(true);
//   })
//   .then((result) => {
//     console.log(result);
//     return doAsync(true);
//   })
//   .then((result) => {
//     console.log(result);
//     return doAsync(false);
//   })
//   .then((result) => {
//     console.log(result);
//     return doAsync(true);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error))
//   .then(() => {
//     console.log("Finally");
//     return doAsync(true);
//   })
