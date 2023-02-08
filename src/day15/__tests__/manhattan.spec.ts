import {
  manhattanDistance,
  getXOverlapRange,
  getExcludedPositionsInRow,
  getOnlyPossiblePosition,
} from "../manhattan";

import { TEST_POSITIONS } from "./parse.spec";

describe("Manhattan", () => {
  it("Should compute distance between two sets of coordinates", () => {
    expect(manhattanDistance([0, 0], [0, 0])).toEqual(0);
    expect(manhattanDistance([0, 0], [1, 0])).toEqual(1);
    expect(manhattanDistance([2, 18], [-2, 15])).toEqual(7);
  });

  it("Should compute range of coords within a given distance from a point in a row", () => {
    const reference = [8, 7];
    const distance = manhattanDistance(reference, [2, 10]);
    const expectedResult = new Set([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ]);
    expect(getXOverlapRange(reference, distance, 10)).toEqual(expectedResult);
  });

  it("Should compute positions that cannot have a beacon", () => {
    expect(getExcludedPositionsInRow(TEST_POSITIONS, 10).size).toBe(26);
  });

  it("Should find the only possible sensor position", () => {
    const size = 20;
    expect(getOnlyPossiblePosition(TEST_POSITIONS, size)).toEqual([14, 11]);
  });
});
