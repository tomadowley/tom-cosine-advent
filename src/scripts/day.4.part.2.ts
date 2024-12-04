import * as fs from "fs";
import * as path from "path";

const filePath = path.resolve(__dirname, "../data/day.4.ts");
const fileContent = fs.readFileSync(filePath, "utf8");

const input = fileContent.split("\n").map((line) => line.split(""));

// Function to check the first diagonal (\ direction)
function checkDiagonal1(x: number, y: number) {
  let count = 0;
  while (x + 2 < input.length && y + 2 < input[0].length) {
    if (
      input[x][y] === "M" &&
      input[x + 1][y + 1] === "A" &&
      input[x + 2][y + 2] === "M"
    ) {
      count++;
    }
    x += 3;
    y += 3;
  }
  return count;
}

// Function to check the second diagonal (/ direction)
function checkDiagonal2(x: number, y: number) {
  let count = 0;
  while (x - 2 >= 0 && y + 2 < input[0].length) {
    if (
      input[x][y] === "M" &&
      input[x - 1][y + 1] === "A" &&
      input[x - 2][y + 2] === "M"
    ) {
      count++;
    }
    x -= 3;
    y += 3;
  }
  return count;
}

let totalCount = 0;

// Iterate over each cell in the grid
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    totalCount += checkDiagonal1(i, j);
    totalCount += checkDiagonal2(i, j);
  }
}

console.log("day 4 part 2 output: ", totalCount);
