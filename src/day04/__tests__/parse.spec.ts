import { parseLine, parseInput } from "../parse";

it("Should parse line into an array of 2 pairs", () => {
  expect(parseLine("2-4,6-8")).toEqual([
    [2, 4],
    [6, 8],
  ]);
});
it("Should parse input as dimension 3 array of numbers", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual([
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ]);
});
