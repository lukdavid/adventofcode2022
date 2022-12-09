import { parseInput } from "./parse";
import Rope from "./rope";

const main = () => {
  const input = parseInput(`${__dirname}/.data/input.txt`);
  const rope = new Rope();
  for (const move of input) {
    rope.moveHead(move.direction, move.distance);
  }
  console.log(
    `After ${input.length} moves, the head is at ${rope.headPosition.x}, ${rope.headPosition.y} and the tail is at ${rope.tailPosition.x}, ${rope.tailPosition.y}`
  );
  console.log(
    `The tail has visited ${rope.getUniquePositionsVisitedByTail()} positions at least once`
  );
};

main();
