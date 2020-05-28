"use strict";

const doSomething = () => {
  let message = "Hey there!";
  let counter = 0;

  const doIt = () => {
    console.log("timeout expired", message);
  };

  const counting = () => {
    console.log("Counter:", ++counter);
  };

  // console.log(doIt);
  setTimeout(doIt, 5000);
  setTimeout(doIt, 3000);

  const handle = setInterval(counting, 1000);

  setTimeout(() => {
    clearInterval(handle);
    console.log("All done!");
  }, 7000);

  // message = "Hallo dot druben";
};

doSomething();
console.log("Waiting..");
