import { data } from "../data/day.1";

const leftList: number[] = [];
const rightList: number[] = [];

// Split the data into two lists
for (let i = 0; i < data.length; i += 2) {
  leftList.push(data[i]);
  rightList.push(data[i + 1]);
}

// Create a frequency map for the right list
const frequencyMap: { [key: number]: number } = {};
for (const num of rightList) {
  if (frequencyMap[num]) {
    frequencyMap[num]++;
  } else {
    frequencyMap[num] = 1;
  }
}

// Calculate the similarity score
let similarityScore = 0;
for (const num of leftList) {
  if (frequencyMap[num]) {
    similarityScore += num * frequencyMap[num];
  }
}

console.log(`day 1 part 2 output: ${similarityScore}`);
