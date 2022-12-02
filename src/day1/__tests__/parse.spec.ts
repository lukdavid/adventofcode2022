import { parseInput } from "../parse";
import { PARSED_INPUT } from "./parsedTestInput";

it("Should parse text file to an nested array", () => {
  expect(parseInput(`${__dirname}/testInput.txt`)).toEqual(PARSED_INPUT);
});
