import { data } from "../data/day.4";

const grid = data.trim().split("\n").map((line) => line.split(""));

// Helper function to check if a word exists starting from (row, col) in a specific direction
function checkWord(
  row: number,
  col: number,
  rowDir: number,
  colDir: number
): boolean {
  const word = "XMAS";
  const wordLength = word.length;

  for (let i = 0; i < wordLength; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;

    // Check boundaries
    if (
      newRow < 0 ||
      newRow >= grid.length ||
      newCol < 0 ||
      newCol >= grid[0].length
    ) {
      return false;
    }

    // Check if the character matches
    if (grid[newRow][newCol] !== word[i]) {
      return false;
    }
  }

  // Mark the found word positions with null to avoid double counting
  for (let i = 0; i < wordLength; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;
    grid[newRow][newCol] = null;
  }

  return true;
}

let count = 0;

// Check all directions from each cell
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    if (
      checkWord(row, col, 0, 1) || // Horizontal right
      checkWord(row, col, 1, 0) || // Vertical down
      checkWord(row, col,
