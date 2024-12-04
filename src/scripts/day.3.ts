import * as fs from "fs";
import * as path from "path";

const filePath = path.resolve(__dirname, "../data/day.3.py");
const fileContent = fs.readFileSync(filePath, "utf8");

// Extract the data string from the Python file content
const dataMatch = fileContent.match(/data\s*=\s*"""\s*([^]*?)\s*"""/);
if (!dataMatch) {
  throw new Error("Failed to extract data from day.3.py");
}
const data = dataMatch[1];

// Regular expression to match valid mul instructions
const mulRegex = /mul\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g;

let match;
let sum = 0;

// Find all valid mul instructions and calculate their products
while ((match = mulRegex.exec(data)) !== null) {
  const x = parseInt(match[1], 10);
  const y = parseInt(match[2], 10);
  sum += x * y;
}

console.log(`day 3 output: ${sum}`);
