import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to search for the word "MAS" in a specific direction from a given starting point
function searchMASFrom(x: number, y: number, dx: number, dy: number): boolean {
  const word = "MAS";
  for (let i = 0; i < word.length; i++) {
    const nx = x + dx * i;
    const ny = y + dy * i;
    if (!isInBounds(nx, ny) || grid[nx][ny] !== word[i]) {
      return false;
    }
  }
  return true;
}

let totalCount = 0;

// Iterate over each cell in the grid and check for "X-MAS" patterns
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === "M") {
      // Check down-right diagonal
      if (searchMASFrom(i + 1, j + 1, 1, 1) && searchMASFrom(i + 3, j + 1, -1, 1)) {
        totalCount++;
      }
      // Check down-left diagonal
      if (searchMASFrom(i + 1, j - 1, 1, -1) && searchMASFrom(i + 3, j - 1, -1, -1)) {
        totalCount++;
      }
    }
  }
}

console.log(`day 4 part 2 output: ${totalCount}`);
