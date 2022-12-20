import { parsePacket, parsePairs } from "../parse";

export const TEST_PAIRS = [
  ["[1,1,3,1,1]", "[1,1,5,1,1]"],
  ["[[1],[2,3,4]]", "[[1],4]"],
  ["[9]", "[[8,7,6]]"],
  ["[[4,4],4,4]", "[[4,4],4,4,4]"],
  ["[7,7,7,7]", "[7,7,7]"],
  ["[]", "[3]"],
  ["[[[]]]", "[[]]"],
  ["[1,[2,[3,[4,[5,6,7]]]],8,9]", "[1,[2,[3,[4,[5,6,0]]]],8,9]"],
];

describe("Parse", () => {
  it("Should parse pairs from input file", () => {
    const pairs = parsePairs(`${__dirname}/testInput.txt`);
    expect(pairs).toEqual(TEST_PAIRS);
  });

  it("Should parse packet from string", () => {
    expect(parsePacket("[1,2,3]")).toEqual([1, 2, 3]);
    expect(parsePacket("[1,[2,[3,[4,[5,6,7]]]],8,9]")).toEqual([
      1,
      [2, [3, [4, [5, 6, 7]]]],
      8,
      9,
    ]);
  });
});
