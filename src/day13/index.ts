import { parsePairs, parsePacket } from "./parse";
import { comparePackets } from "./compare";
import { Packet } from "./types";
import { findDividerIndexes, sortPackets } from "./sort";
import { cp } from "fs";

const main = () => {
  const pairs = parsePairs(`${__dirname}/.data/input.txt`);
  const results = pairs.map(([left, right]) =>
    comparePackets(parsePacket(left), parsePacket(right))
  );
  // sum indexes where result is true
  const count = results.reduce(
    (acc, result, i) => (result ? acc + i + 1 : acc),
    0
  );
  console.log(`Part 1 : sum of indexes is ${count}`);

  // sort packets
  const dividerPackets = [[[2]], [[6]]];
  const packets = pairs.reduce((acc, [left, right]) => {
    acc.push(JSON.parse(left));
    acc.push(JSON.parse(right));
    return acc;
  }, [] as Packet[]);
  const sortedPackets = sortPackets([...packets, ...dividerPackets]);
  const dividerIndexes = findDividerIndexes(sortedPackets, dividerPackets);
  console.log(
    `Part 2 : divider indexes are ${dividerIndexes}, product is ${dividerIndexes.reduce(
      (acc, i) => acc * i,
      1
    )}`
  );
};

main();
