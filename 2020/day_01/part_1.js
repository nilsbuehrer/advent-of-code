// Day 1
// Part One
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output

  numbers = input.split("\n").map(x => +x)

  numbers.forEach(n1 => {
    numbers.forEach(n2 => {
      if (n1 + n2 === 2020) {
        output = n1 * n2;
      }
    })
  })

  return { output }
};

// output:
run(func)
