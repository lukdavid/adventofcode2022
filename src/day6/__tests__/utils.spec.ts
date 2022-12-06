import { areAllCaractersUnique } from "../utils";

it("Should find whether all characters are unique within a string", () => {
  expect(areAllCaractersUnique("abc")).toBe(true);
  expect(areAllCaractersUnique("abbc")).toBe(false);
});
