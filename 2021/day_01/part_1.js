const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  
  numbers = input.split("\n").map((x) => +x);
  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) counter++;
  }

  output = counter;

  return { output };
};

// output:
run(func);
