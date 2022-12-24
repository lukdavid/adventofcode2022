import { readFileSync } from "fs";
import { parsePaths, getBounds } from "./parse";
import Cave from "./cave";

const main1 = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf-8");
  const paths = parsePaths(raw);
  const cave = new Cave(paths);
  cave.fillPaths();
  cave.fill();
  console.log(
    `Cave is in infinite flow with ${cave.sandsUnitsDropped} units of sand`
  );
  console.log(cave.toString());
};

const main2 = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf-8");
  const paths = parsePaths(raw);
  const { maxY } = getBounds(paths);

  const cave = new Cave([
    ...paths,
    [
      [500 - (maxY + 2), maxY + 2],
      [500 + (maxY + 2), maxY + 2],
    ],
  ]);
  cave.fillPaths();
  cave.fill();
  console.log(`Cave is filled with ${cave.sandsUnitsDropped} units of sand`);
  //   console.log(cave.toString());
};

main1();
main2();
