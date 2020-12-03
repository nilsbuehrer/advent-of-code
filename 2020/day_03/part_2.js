// Day 3
// Part Two
const { input } = require("./input.js")
const { run } = require("../../util/run.js")

const func = () => {
  let output = 1
  let treeCount = 0

  entries = input.split("\n")
  lineLength = entries[0].length

  commands = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

  commands.forEach(c => {
    right = c[0]
    down = c[1]

    for (let i = 0, j = 0; i < entries.length; i += down, j++) {
      const pos = ((j*right) % lineLength)
      const e = entries[i]
      
      if (e.substr(pos, 1) === "#") {
        treeCount++
      }
    }

    output *= treeCount
    treeCount = 0
  });
  
  return { output }
}

// output:
run(func)
