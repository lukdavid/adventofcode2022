import Pair from "../pair";

it("Should find which pair has the largest span", () => {
  const pair0 = new Pair([
    [2, 4],
    [6, 8],
  ]);
  expect(pair0.getLargestSpanIndex()).toBe(0);
  const pair1 = new Pair([
    [2, 3],
    [4, 8],
  ]);
  expect(pair1.getLargestSpanIndex()).toBe(1);
  const pair2 = new Pair([
    [2, 8],
    [3, 7],
  ]);
  expect(pair2.getLargestSpanIndex()).toBe(0);
});

it("Should detect whether a pair fully overlaps the other", () => {
  const pair1 = new Pair([
    [2, 4],
    [6, 8],
  ]);
  expect(pair1.getIsFullOverlap()).toBe(false);
  const pair2 = new Pair([
    [2, 8],
    [3, 7],
  ]);
  expect(pair2.getIsFullOverlap()).toBe(true);
});

it("Should detect whether a pair partly overlaps the other", () => {
  const pair1 = new Pair([
    [2, 4],
    [6, 8],
  ]);
  expect(pair1.getIsOverlap()).toBe(false);
  const pair2 = new Pair([
    [2, 8],
    [3, 7],
  ]);
  expect(pair2.getIsOverlap()).toBe(true);
  const pair3 = new Pair([
    [2, 4],
    [3, 7],
  ]);
  expect(pair3.getIsOverlap()).toBe(true);
  const pair4 = new Pair([
    [2, 3],
    [3, 7],
  ]);
  expect(pair4.getIsOverlap()).toBe(true);
});
