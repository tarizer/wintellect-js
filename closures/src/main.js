"use strict";

const outer = () => {
  let t = 2;

  // const inner =
  return () => {
    console.log(t);
  };

  // inner();
  // console.dir(inner);
};

const fn = outer();
fn();
outer()();
