import * as fs from "fs";
import * as path from "path";

const filePath = path.resolve(__dirname, "../data/day.3.py");
const fileContent = fs.readFileSync(filePath, "utf8");

// Extract the data string from the Python file content
const dataMatch = fileContent.match(/data\s*=\s*"""\s*([^]*?)\s*"""/);
if (!dataMatch) {
  throw new Error("Failed to extract data from day.3.py");
}
const input = dataMatch[1];

const mulRegex = /mul\((\d+),(\d+)\)/g;
const doRegex = /do\(\)/g;
const dontRegex = /don't\(\)/g;

let isMulEnabled = true;
let result = 0;

const mulMatches = [...input.matchAll(mulRegex)];
const doMatches = [...input.matchAll(doRegex)];
const dontMatches = [...input.matchAll(dontRegex)];

let mulIndex = 0;
let doIndex = 0;
let dontIndex = 0;

while (mulIndex < mulMatches.length) {
  const mulMatch = mulMatches[mulIndex];
  const mulPosition = mulMatch.index!;

  // Check for do() or don't() before the current mul()
  while (
    (doIndex < doMatches.length && doMatches[doIndex].index! < mulPosition) ||
    (dontIndex < dontMatches.length &&
      dontMatches[dontIndex].index! < mulPosition)
  ) {
    if (
      dontIndex < dontMatches.length &&
      (doIndex >= doMatches.length ||
        dontMatches[dontIndex].index! < doMatches[doIndex].index!)
    ) {
      isMulEnabled = false;
      dontIndex++;
    } else {
      isMulEnabled = true;
      doIndex++;
    }
  }

  if (isMulEnabled) {
    const [, a, b] = mulMatch.map(Number);
    result += a * b;
  }

  mulIndex++;
}

console.log("day 3 part 2 output: ", result);
