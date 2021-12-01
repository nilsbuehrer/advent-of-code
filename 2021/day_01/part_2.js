const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;

  numbers = input.split("\n").map((x) => +x);

  counter = 0;
  prev = numbers[0] + numbers[1] + numbers[2];

  for (let i = 0; i < numbers.length; i++) {
    n = numbers[i] + numbers[i + 1] + numbers[i + 2];
    if (prev < n) counter++;
    prev = n;
  }

  output = counter;

  return { output };
};

// output:
run(func);
