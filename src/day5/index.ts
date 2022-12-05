import { parseInput } from "./parse";
import Stacks from "./stacks";

const main1 = () => {
  const { stacks: rawStacks, moves } = parseInput(
    `${__dirname}/.data/input.txt`
  );
  const stacks = new Stacks(rawStacks);
  moves.forEach((move) => {
    stacks.moveCrates9000(move);
  });
  console.log(`The top crates after all moves with crate 9000 are :`);
  console.log(stacks.getTopCrateIds());
};

main1();

const main2 = () => {
  const { stacks: rawStacks, moves } = parseInput(
    `${__dirname}/.data/input.txt`
  );
  const stacks = new Stacks(rawStacks);
  moves.forEach((move) => {
    stacks.moveCrates9001(move);
  });
  console.log(`The top crates after all moves with crate 9001 are :`);
  console.log(stacks.getTopCrateIds());
};

main2();
