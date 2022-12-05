import { parseInput } from "../parse";

it("Should correctly parse puzzle input, both stacks and moves", () => {
  const { stacks, moves } = parseInput(`${__dirname}/testInput.txt`);
  expect(stacks).toEqual({ "1": ["Z", "N"], "2": ["M", "C", "D"], "3": ["P"] });
  expect(moves).toEqual([
    { num: 1, from: "2", to: "1" },
    { num: 3, from: "1", to: "3" },
    { num: 2, from: "2", to: "1" },
    { num: 1, from: "1", to: "2" },
  ]);
});
