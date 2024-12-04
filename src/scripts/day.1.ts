import { data } from "../data/day.1";

const leftList: number[] = [];
const rightList: number[] = [];

// Split the data into two lists
for (let i = 0; i < data.length; i += 2) {
  leftList.push(data[i]);
  rightList.push(data[i + 1]);
}

// Sort both lists
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

// Calculate the total distance
let totalDistance = 0;
for (let i = 0; i < leftList.length; i++) {
  totalDistance += Math.abs(leftList[i] - rightList[i]);
}

console.log(`Total Distance: ${totalDistance}`);
