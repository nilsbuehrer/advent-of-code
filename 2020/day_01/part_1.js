// Day n: title
// Part One/Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  // TODO: add code here
  console.log(input);
  arr = input.split("\n").map(x=>+x);

  arr.forEach(i => {
    arr.forEach(j => {
      if(i + j == 2020) {
        output = i * j;
      }
    });
  });

  return { output /*, operations */ };
};

// output:
run(func);
