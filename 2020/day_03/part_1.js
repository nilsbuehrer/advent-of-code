// Day 3
// Part One
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output

  treeCount = 0

  entries = input.split("\n")

  lineLength = entries[0].length

  for (let i = 0; i < entries.length; i++) {
    const pos = ((i*3) % lineLength)
    const e = entries[i]

    if (e.substr(pos, 1) === "#") {
      treeCount++
    }
  }

  output = treeCount

  return { output }
}

// output:
run(func)
