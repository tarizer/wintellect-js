"use strict";

const doSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, 2000);
  });
};

// doSomething().then((result) => console.log(result));

const doIt = async () => {
  console.log("Entering doIt function");
  const message = await doSomething();
  console.log(message);
  // return message;
};

doIt();
