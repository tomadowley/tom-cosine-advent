import { data } from "./data";

const leftList: number[] = [];
const rightList: number[] = [];

// Split the data into two lists
for (let i = 0; i < data.length; i += 2) {
  leftList.push(data[i]);
  rightList.push(data[i + 1]);
}

// Create maps to count occurrences of each number in both lists
const leftMap = new Map<number, number>();
const rightMap = new Map<number, number>();

for (const num of leftList) {
  leftMap.set(num, (leftMap.get(num) || 0) + 1);
}

for (const num of rightList) {
  rightMap.set(num, (rightMap.get(num) || 0) + 1);
}

// Calculate the total similarity score
let similarityScore = 0;
for (const [num, count] of leftMap.entries()) {
  if (rightMap.has(num)) {
    similarityScore += num * count * rightMap.get(num)!;
  }
}

console.log(`Similarity Score: ${similarityScore}`);
