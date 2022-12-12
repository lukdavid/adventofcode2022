import { parseInput } from "../parse";
import { CaloriesList } from "../types";

export const PARSED_INPUT: CaloriesList = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000],
];

it("Should parse text file to an nested array", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual(PARSED_INPUT);
});
