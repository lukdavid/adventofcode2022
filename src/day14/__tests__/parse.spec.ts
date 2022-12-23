import { readFileSync } from "fs";
import { parsePaths, getBounds } from "../parse";

const raw = readFileSync(`${__dirname}/testInput.txt`, "utf-8");

export const TEST_PATHS = [
  [
    [498, 4],
    [498, 6],
    [496, 6],
  ],
  [
    [503, 4],
    [502, 4],
    [502, 9],
    [494, 9],
  ],
];

describe("Parse paths from input", () => {
  it("Should parse paths from the input", () => {
    expect(parsePaths(raw)).toEqual(TEST_PATHS);
  });

  it("Should get min and max dims from paths", () => {
    expect(getBounds(TEST_PATHS)).toEqual({
      minX: 494,
      maxX: 503,
      minY: 4,
      maxY: 9,
    });
  });
});
