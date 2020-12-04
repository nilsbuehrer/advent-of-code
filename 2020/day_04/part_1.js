// Day 4
// Part One
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output
  let valid = 0

  const entries = input.split("\n\n")
  const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

  entries.forEach(e => {
    let checker = 0
    fields.forEach(f => {
      if (e.includes(f+":")) checker++
    });
    if (checker === fields.length) valid++
  });
  
  output = valid

  return { output }
}

// output:
run(func)
