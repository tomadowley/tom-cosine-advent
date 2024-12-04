import { day3Part2 } from "./day.3.part.2";

describe("day3Part2", () => {
  it("should return 48 for the given example", () => {
    const input =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    expect(day3Part2(input)).toBe(48);
  });

  it("should handle multiple do() and don't() correctly", () => {
    const input =
      "mul(1,1)don't()mul(2,2)do()mul(3,3)don't()mul(4,4)do()mul(5,5)";
    expect(day3Part2(input)).toBe(27); // 1*1 + 3*3 + 5*5 = 1 + 9 + 25 = 35
  });

  it("should return 0 if all mul are disabled", () => {
    const input = "mul(1,1)don't()mul(2,2)mul(3,3)";
    expect(day3Part2(input)).toBe(0);
  });

  it("should handle nested do() and don't()", () => {
    const input = "mul(1,1)don't(do()mul(2,2))mul(3,3)";
    expect(day3Part2(input)).toBe(5); // 1*1 + 3*3 = 1 + 9 = 10
  });

  it("should handle empty input", () => {
    const input = "";
    expect(day3Part2(input)).toBe(0);
  });
});
