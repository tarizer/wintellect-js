"use strict";

try {
  setTimeout(() => {
    try {
      throw Error("Something went wrong");
    } catch (error) {
      console.log("Handled error inside callback function\n", error);
    }
  }, 2000);
  console.log("Wainting..");
  // throw "Something went wrong";
} catch (error) {
  console.log("Handled error\n", error);
}
