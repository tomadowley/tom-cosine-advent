import { data } from "../data/day.3";

// Regular expression to match valid mul(X,Y) instructions
const regex = /mul\(\d+,\d+\)/g;

// Find all matches in the data string
const matches = data.match(regex);

let sum = 0;

if (matches) {
  for (const match of matches) {
    // Extract the numbers X and Y from each match
    const [x, y] = match.slice(4, -1).split(",").map(Number);
    // Add the result of X * Y to the sum
    sum += x * y;
  }
}

console.log(`Sum of all multiplications: ${sum}`);
