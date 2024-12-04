import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to search for the word "XMAS" in all directions from a given starting point
function searchFrom(x: number, y: number): number {
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [1, 1], // down-right
    [1, -1], // down-left
    [0, -1], // left
    [-1, 0], // up
    [-1, -1], // up-left
    [-1, 1], // up-right
  ];
  let count = 0;

  for (const [dx, dy] of directions) {
    let found = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (!isInBounds(nx, ny) || grid[nx][ny] !== "XMAS"[i]) {
        found = false;
        break;
      }
    }
    if (found) {
      count++;
    }
  }

  return count;
}

let totalCount = 0;

// Iterate over each cell in the grid and search for "XMAS" starting from that cell
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    totalCount += searchFrom(i, j);
  }
}

console.log(`day 4 output: ${totalCount}`);
