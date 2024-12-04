import { data } from "../data/day.2";

function isSafeReport(report: number[]): boolean {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];
    if (diff < 1 || diff > 3) {
      return false;
    }
    if (diff > 0) {
      decreasing = false;
    }
    if (diff < 0) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}

const reports = data.trim().split("\n").map(line => line.trim().split(" ").map(Number));
const safeReports = reports.filter(isSafeReport);

console.log(`Number of safe reports: ${safeReports.length}`);
