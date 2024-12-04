import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to check for "MAS" in a specific direction
function checkMAS(x: number, y: number, dx: number, dy: number): boolean {
  const mas = "MAS";
  for (let i = 0; i < 3; i++) {
    const nx = x + dx * i;
    const ny = y + dy * i;
    if (!isInBounds(nx, ny) || grid[nx][ny] !== mas[i]) {
      return false;
    }
  }
  return true;
}

// Function to search for the X-MAS pattern from a given starting point
function searchXMAS(x: number, y: number): number {
  let count = 0;

  // Check for the two arms of the X
  if (
    checkMAS(x, y, 1, -1) && // top-left to bottom-right
    checkMAS(x, y, 1, 1) // top-right to bottom-left
  ) {
    count++;
  }

  return count;
}

let totalCount = 0;

// Iterate over each cell in the grid and search for X-MAS starting from that cell
for (let i = 0; i < grid.length - 2; i++) {
  for (let j = 0; j < grid[i].length - 2; j++) {
    totalCount += searchXMAS(i, j);
  }
}

console.log(`day 4 part 2 output: ${totalCount}`);
