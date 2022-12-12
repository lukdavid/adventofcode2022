import { parseInput } from "../parse";

it("Should correctly parse input file", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual([
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ]);
});
