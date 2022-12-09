import { parseInput } from "../parse";
import { Direction } from "../types";

export const PARSED_INPUT = [
  { direction: Direction.Right, distance: 4 },
  { direction: Direction.Up, distance: 4 },
  { direction: Direction.Left, distance: 3 },
  { direction: Direction.Down, distance: 1 },
  { direction: Direction.Right, distance: 4 },
  { direction: Direction.Down, distance: 1 },
  { direction: Direction.Left, distance: 5 },
  { direction: Direction.Right, distance: 2 },
];

export const PARSED_INPUT_2 = [
  { direction: Direction.Right, distance: 5 },
  { direction: Direction.Up, distance: 8 },
  { direction: Direction.Left, distance: 8 },
  { direction: Direction.Down, distance: 3 },
  { direction: Direction.Right, distance: 17 },
  { direction: Direction.Down, distance: 10 },
  { direction: Direction.Left, distance: 25 },
  { direction: Direction.Up, distance: 20 },
];

it("Should parse input as an array of direction and distance", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual(PARSED_INPUT);
  expect(parseInput(`${__dirname}/testInput2.txt`)).toEqual(PARSED_INPUT_2);
});
