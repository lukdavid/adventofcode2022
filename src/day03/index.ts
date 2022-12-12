import Rubsack from "./rubsack";
import { parseInput } from "./parse";

const main1 = () => {
  const rubsackList = parseInput(`${__dirname}/.data/input.txt`);
  let score = 0;
  rubsackList.forEach((content) => {
    const rubsack = new Rubsack(content);
    score += rubsack.getCommonSupplyPriority();
  });
  console.log(`Score for ${rubsackList.length} rubsacks is ${score}`);
};

main1();

const GROUP_SIZE = 3;

const main2 = () => {
  // parse groups
  const rubsackList = parseInput(`${__dirname}/.data/input.txt`);
  const groups: string[][] = [];

  if (rubsackList.length % GROUP_SIZE !== 0) {
    throw new Error(`Cant divide into groups of ${GROUP_SIZE}`);
  }
  for (let i = 0; i < rubsackList.length / GROUP_SIZE; i++) {
    groups.push(rubsackList.slice(i * GROUP_SIZE, (i + 1) * GROUP_SIZE));
  }
  // get scores
  let score = 0;
  groups.forEach((group) => {
    const rubsack = new Rubsack(group.join(""), GROUP_SIZE, group);
    // console.log(
    //   group,
    //   rubsack.getCommonSupply(),
    //   rubsack.getCommonSupplyPriority()
    // );
    score += rubsack.getCommonSupplyPriority();
  });
  console.log(`Score for ${groups.length} groups is ${score}`);
};

main2();
