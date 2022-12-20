import { TEST_PAIRS } from "./parse.spec";
import { Packet } from "../types";
import { sortPackets, findDividerIndexes } from "../sort";

const TEST_PACKETS = TEST_PAIRS.reduce((acc, [left, right]) => {
  acc.push(JSON.parse(left));
  acc.push(JSON.parse(right));
  return acc;
}, [] as Packet[]);

const TEST_SORTED_PACKETS = [
  [],
  [[]],
  [[[]]],
  [1, 1, 3, 1, 1],
  [1, 1, 5, 1, 1],
  [[1], [2, 3, 4]],
  [1, [2, [3, [4, [5, 6, 0]]]], 8, 9],
  [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
  [[1], 4],
  [[2]],
  [3],
  [[4, 4], 4, 4],
  [[4, 4], 4, 4, 4],
  [[6]],
  [7, 7, 7],
  [7, 7, 7, 7],
  [[8, 7, 6]],
  [9],
];

describe("Part 2 - Sorts packets", () => {
  const dividerPackets = [[[2]], [[6]]];

  it("Sorts packets in the right order", () => {
    expect(sortPackets([...TEST_PACKETS, ...dividerPackets])).toEqual(
      TEST_SORTED_PACKETS
    );
  });

  it("Find indexes of dividers", () => {
    const sortedPackets = sortPackets([...TEST_PACKETS, ...dividerPackets]);
    expect(findDividerIndexes(sortedPackets, dividerPackets)).toEqual([10, 14]);
  });
});
