import { data } from "../data/day.2";

function isSafeReport(report: number[]): boolean {
  let increasing = false;
  let decreasing = false;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];
    if (diff < 0) {
      decreasing = true;
    }
    if (diff > 0) {
      increasing = true;
    }
    if (diff === 0 || diff > 3 || diff < -3) {
      return false;
    }
  }

  return !(increasing && decreasing);
}

const reports = data
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
const safeReports = reports.filter(isSafeReport);

console.log(`day 2 output: ${safeReports.length}`);
