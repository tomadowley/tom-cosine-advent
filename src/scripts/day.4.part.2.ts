import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.trim().split(""));

// Function to check if a given position is within the bounds of the grid
function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

// Function to search for the X-MAS pattern from a given starting point
function searchXMASPattern(x: number, y: number): number {
  const directions = [
    [1, -1], // down-left
    [1, 1], // down-right
  ];
  let count = 0;

  for (const [dx, dy] of directions) {
    let found = true;
    const positions = [
      [x, y],
      [x + dx, y + dy],
      [x + 2 * dx, y + 2 * dy],
      [x + 3 * dx, y + 3 * dy],
      [x + 4 * dx, y + 4 * dy],
    ];

    for (let i = 0; i < positions.length; i++) {
      const [nx, ny] = positions[i];
      if (!isInBounds(nx, ny)) {
        found = false;
        break;
      }
    }

    if (found) {
      const chars = positions.map(([nx, ny]) => grid[nx][ny]);
      if (
        chars[0] === "M" &&
        chars[1] === "A" &&
        chars[2] === "S" &&
        chars[3] === "M" &&
        chars[4] === "A"
      ) {
        count++;
      }
    }
  }

  return count;
}

let totalCount = 0;

// Iterate over each cell in the grid and search for the X-MAS pattern starting from that cell
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    totalCount += searchXMASPattern(i, j);
  }
}

console.log(`day 4 part 2 output: ${totalCount}`);
