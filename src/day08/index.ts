import { parseInput } from "./parse";
import Forest from "./forest";

const main = () => {
  const parsedInput = parseInput(`${__dirname}/.data/input.txt`);
  const forest = new Forest(parsedInput);
  forest.computeVisibility();
  console.log(
    `🌲 Initiated forest of size ${forest.height}x${forest.width} 🌲`
  );
  console.log(
    `There are ${forest.countVisibleTrees()} trees visible from outside`
  );
  const bestScenicScore = forest.getBestScenicScore();
  console.log(`The best scenic score is ${bestScenicScore}`);
};

main();
