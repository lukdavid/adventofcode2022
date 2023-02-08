import { diffSet } from "../set";

const set1 = new Set([-1, 0, 1, 2, 3, 4, 6, 7, 8, 9]);
const set2 = new Set([0, 1, 2, 3, 4, 6, 7, 8, 9]);
const set3 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

it("Should find which value of first set is not in the other", () => {
  expect(diffSet(set2, set1, 0, 10)).toEqual(new Set([]));
  expect(diffSet(set3, set1, 0, 10)).toEqual(new Set([5]));
  expect(diffSet(set3, set2, 0, 10)).toEqual(new Set([5]));
});
