import { comparePackets } from "../compare";

describe("Compare pair of packets", () => {
  it("Compares integers", () => {
    expect(comparePackets([1], [2])).toBe(true);
    expect(comparePackets([2], [1])).toBe(false);
    expect(comparePackets([1, 1, 2], [1, 1, 3])).toBe(true);
    expect(comparePackets([1, 1, 3], [1, 1, 2])).toBe(false);
  });

  it("Compares which array runs out first", () => {
    expect(comparePackets([1], [1, 1])).toBe(true);
    expect(comparePackets([1, 1], [1])).toBe(false);
  });

  it("Recursively compares arrays if both", () => {
    expect(comparePackets([1, [1, 1]], [1, [1, 2]])).toBe(true);
    expect(comparePackets([1, [1, 2]], [1, [1, 1]])).toBe(false);
  });

  it("If one is an array and the other an integer, converts integer into array", () => {
    expect(comparePackets([[1], [2, 3, 4]], [[1], 4])).toBe(true);
    expect(comparePackets([5, 2], [[4], 3])).toBe(false);
    expect(comparePackets([4, 2], [[4], 3])).toBe(true);
    expect(comparePackets([1], [[1, 2, 3]])).toBe(true);
    expect(comparePackets([[], 1], [[], 2])).toBe(true);
    expect(comparePackets([[], 2], [[], 1])).toBe(false);
  });

  it("Should compare all packets from test input", () => {
    const pairs = [
      ["[1,1,3,1,1]", "[1,1,5,1,1]"],
      ["[[1],[2,3,4]]", "[[1],4]"],
      ["[9]", "[[8,7,6]]"],
      ["[[4,4],4,4]", "[[4,4],4,4,4]"],
      ["[7,7,7,7]", "[7,7,7]"],
      ["[]", "[3]"],
      ["[[[]]]", "[[]]"],
      ["[1,[2,[3,[4,[5,6,7]]]],8,9]", "[1,[2,[3,[4,[5,6,0]]]],8,9]"],
    ];
    const results = [true, true, false, true, false, true, false, false];
    pairs.forEach(([left, right], i) => {
      const result = comparePackets(JSON.parse(left), JSON.parse(right));
      //   console.log(i, result);
      expect(result).toBe(results[i]);
    });
  });

  it("Returns undefined when packets are equal", () => {
    expect(comparePackets([1, 2, 3], [1, 2, 3])).toBe(undefined);
    expect(comparePackets([1, [2, 3]], [1, [2, 3]])).toBe(undefined);
    expect(
      comparePackets(
        [1, [2, [3, [4, [5, 6, 7]]]]],
        [1, [2, [3, [4, [5, 6, 7]]]]]
      )
    ).toBe(undefined);
  });
});
