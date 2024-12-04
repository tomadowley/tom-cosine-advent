import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to check if the X-MAS pattern exists with 'M' at the center (x, y)
function checkXMasPattern(x: number, y: number): boolean {
  const directions = [
    [-1, -1], // up-left
    [-1, 1],  // up-right
    [1, -1],  // down-left
    [1, 1],   // down-right
  ];

  for (const [dx, dy] of directions) {
    if (
      !isInBounds(x + dx, y + dy) || grid[x + dx][y + dy] !== 'A' ||
      !isInBounds(x + 2*dx, y + 2*dy) || grid[x + 2*dx][y + 2*dy] !== 'S'
    ) {
      return false;
    }
  }

  return true;
}

let totalCount = 0;

// Iterate over each cell in the grid and check for X-MAS pattern with 'M' at the center
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 'M' && checkXMasPattern(i, j)) {
      totalCount++;
    }
  }
}

console.log(`day 4 part 2 output: ${totalCount}`);
