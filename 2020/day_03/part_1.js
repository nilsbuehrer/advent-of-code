// Day 3
// Part One
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let treeCount = 0

  const entries = input.split("\n")
  const lineLength = entries[0].length

  for (let i = 0; i < entries.length; i++) {
    const pos = ((i*3) % lineLength)
    const e = entries[i]

    if (e[pos] === "#") {
      treeCount++
    }
  }

  const output = treeCount

  return { output }
}

// output:
run(func)
