// Day 4
// Part One
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output
  let valid = 0
  
  const entries = input.split("\n\n");
  const conditions = {
    "byr": /^(19[2-8][0-9]|199[0-9]|200[0-2])$/,
    "iyr": /^(201[0-9]|2020)$/,
    "eyr": /^(202[0-9]|2030)$/,
    "hgt": /^(1[5-8][0-9]|19[0-3]cm)|((59|6[0-9]|7[0-6])in)$/,
    "hcl": /^#([a-f0-9]{6})$/,
    "ecl": /^amb|blu|brn|gry|grn|hzl|oth$/,
    "pid": /^.{9}$/
  }  
  const conditionsLength = 7

  entries.forEach((e) => {
    let checker = 0;
    let fields = e.replace(/\n/g, " ").split(" ").map(pair => pair.split(":"))
    
    fields.forEach(f => {
      const regex = conditions[f[0]]
      if (regex) {
        if (regex.test(f[1])) {
          checker++
        }
      }
    })

    if (checker === conditionsLength) valid++
  })

  output = valid

  return { output }
}

// output:
run(func)
