import { parseInput } from "../parse";

export const PARSED_TEST_INPUT = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

it("Should parse input as a dim-2 number array", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual(PARSED_TEST_INPUT);
});
