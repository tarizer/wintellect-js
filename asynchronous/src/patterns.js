"use strict";

// Racing pattern
// Only the first task to finish is used

let first = true;

setInterval(() => {
  if (first) {
    console.log("a");
    first = false;
  }
}, 2000);

setInterval(() => {
  if (first) {
    console.log("b");
    first = false;
  }
}, 1000);

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

// console.log(counter);

/**************************************/

// Pyramid of doom -> Run tasks in order
// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//     }, 2000);
//   }, 2000);
// }, 2000);
