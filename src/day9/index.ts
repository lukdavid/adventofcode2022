import { parseInput } from "./parse";
import Rope from "./rope";

const main = () => {
  const input = parseInput(`${__dirname}/.data/input.txt`);
  // part 1 : length 2
  const rope2 = new Rope(2);
  for (const move of input) {
    rope2.moveHead(move.direction, move.distance);
  }
  console.log(
    `After ${
      input.length
    } moves in rope of length 2, tail has visited ${rope2.getUniquePositionsVisitedByTail()} positions at least once`
  );
  // part 2 : length 10
  const rope10 = new Rope(10);
  for (const move of input) {
    rope10.moveHead(move.direction, move.distance);
  }
  console.log(
    `After ${
      input.length
    } moves in rope of length 10, tail has visited ${rope10.getUniquePositionsVisitedByTail()} positions at least once`
  );
};

main();
