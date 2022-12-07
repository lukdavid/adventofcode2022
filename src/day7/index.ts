import { readFileSync } from "fs";
import { parseTree } from "./parse";

const main1 = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf8").toString();
  const tree = parseTree(raw);
  const dirs = tree.findDirsSmallerThan(100000);
  const sum = dirs.reduce((acc, dir) => acc + (dir.size || 0), 0);
  console.log(
    `The sum of the sizes of the directories smaller than 100000 is ${sum}`
  );
};

main1();

const main2 = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf8").toString();
  const tree = parseTree(raw);
  tree.computeDirectorySizes();
  const freeSpace = 70000000 - (tree.dirs[0].size || 0); // root
  const spaceWeNeedToFree = 30000000 - freeSpace;
  console.log(
    `We have ${freeSpace} free space and we need to free ${spaceWeNeedToFree}}`
  );
  const possibleDirs = tree.findDirsBiggerThan(spaceWeNeedToFree);
  let dirToDelete = possibleDirs[0];
  for (const dir of possibleDirs) {
    if (dir.size && dirToDelete.size && dir.size < dirToDelete.size) {
      dirToDelete = dir;
    }
  }
  console.log(
    `The smallest dir to delete is ${dirToDelete.name} with size ${dirToDelete.size}`
  );
};

main2();
