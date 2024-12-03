import * as fs from "fs";

// Read the contents of the Python file
const data = fs.readFileSync("src/data/day.3.py", "utf8");

// Extract the multi-line string assigned to 'data'
const corruptedMemory = data.match(/""".*?"""/s)?.[0] || "";

// Define a regular expression to find valid mul instructions
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let totalSum = 0;
let match;

// Iterate over all matches of the regular expression in the corrupted memory
while ((match = mulRegex.exec(corruptedMemory)) !== null) {
  const x = parseInt(match[1], 10);
  const y = parseInt(match[2], 10);
  totalSum += x * y;
}

console.log(`Total Sum of All Multiplications: ${totalSum}`);
