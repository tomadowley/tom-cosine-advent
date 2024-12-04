import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to search for the X-MAS pattern from a given starting point
function searchXMASFrom(x: number, y: number): number {
  let count = 0;

  // Check all four orientations of the X-MAS pattern
  const directions = [
    [[1, -1], [1, 1]], // MAS down-left, MAS down-right
    [[1, 1], [1, -1]], // MAS down-right, MAS down-left
    [[-1, -1], [-1, 1]], // MAS up-left, MAS up-right
    [[-1, 1], [-1, -1]], // MAS up-right, MAS up-left
  ];

  for (const [[dx1, dy1], [dx2, dy2]] of directions) {
    if (
      isInBounds(x + dx1 * 2, y + dy1 * 2) &&
      isInBounds(x + dx2 * 2, y + dy2 * 2)
    ) {
      const mas1 =
        grid[x + dx1][y + dy1] +
        grid[x + dx1 * 2][y + dy1 * 2] +
        grid[x][y] +
        grid[x + dx2][y + dy2] +
        grid[x + dx2 * 2][y + dy2 * 2];
      const mas2 =
        grid[x + dx2][y + dy2] +
        grid[x + dx2 * 2][y + dy2 * 2] +
        grid[x][y] +
        grid[x + dx1][y + dy1] +
        grid[x + dx1 *
import { data } from "../data/day.4";

// Parse the grid from the input data
const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to check if a given center point forms an "X-MAS" pattern
function checkXMASPattern(x: number, y: number): boolean {
  const positions = [
    [x - 1, y - 1], // top-left
    [x - 1, y + 1], // top-right
    [x + 1, y - 1], // bottom-left
    [x + 1, y + 1], // bottom-right
    [x - 2, y],     // top-middle
    [x + 2, y],     // bottom-middle
  ];

  for (const [px, py] of positions) {
    if (!isInBounds(px, py) || grid[px][py] !== 'M') {
      return false;
    }
  }

  return (
    grid[x][y] === 'A' &&
    grid[x - 1][y] === 'S' &&
    grid[x + 1][y] === 'S'
  );
}

let totalCount = 0;

// Iterate over each cell in the grid and check for "X-MAS" patterns
for (let i = 2; i < grid.length - 2; i++) {
  for (let j = 2; j < grid[i].length - 2; j++) {
    if (checkXMASPattern(i, j)) {
      totalCount++;
    }
  }
}

console.log(`day 4 part 2 output: ${totalCount}`);
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
