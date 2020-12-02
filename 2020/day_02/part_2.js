// Day 2
// Part Two
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output

  validCount = 0;

  entries = input.split("\n");

  entries.forEach(e => {
    let minmax = e.split("-")
    let min = minmax[0]
    let max = minmax[1].split(" ")[0]
    let char = e.split(" ")[1].split(":")[0]
    let password = e.split(": ")[1]
    
    let foo = (password[min-1] === char)
    let bar = (password[max-1] === char)
    if (( foo && !bar ) || ( !foo && bar )) {
      validCount++
    }
    
  });

  output = validCount

  return { output }
};

// output:
run(func)
