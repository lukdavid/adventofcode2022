import { readFileSync } from "fs";
import { parsePaths } from "./parse";
import Cave from "./cave";

const main = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf-8");
  const paths = parsePaths(raw);
  const cave = new Cave(paths);
  cave.fillPaths();
  cave.fill();
  console.log(`Cave is filled with ${cave.sandsUnitsDropped} units of sand`);
  console.log(cave.toString());
};

main();
