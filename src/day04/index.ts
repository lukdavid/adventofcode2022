import { parseInput } from "./parse";
import Pair from "./pair";

const input = parseInput(`${__dirname}/.data/input.txt`);

const main1 = () => {
  const pairs = input.map((spans) => new Pair(spans));
  let fullOverlaps = 0;
  pairs.forEach((pair) => {
    if (pair.getIsFullOverlap()) {
      fullOverlaps += 1;
    }
  });
  console.log(
    `There are ${fullOverlaps} full overlaps for ${pairs.length} pairs`
  );
};

main1();

const main2 = () => {
  const pairs = input.map((spans) => new Pair(spans));
  let overlaps = 0;
  pairs.forEach((pair) => {
    if (pair.getIsOverlap()) {
      overlaps += 1;
    }
  });
  console.log(
    `There are ${overlaps} simple overlaps for ${pairs.length} pairs`
  );
};

main2();
