import { readFileSync } from "fs";
import { parsePositions } from "./parse";
import {
  getExcludedPositionsInRow,
  getOnlyPossiblePosition,
} from "./manhattan";

const main1 = () => {
  const raw = readFileSync(`${__dirname}/.data/input.txt`, "utf8").toString();
  const positions = parsePositions(raw);
  const targetRowY = 2000000;
  const excluded = getExcludedPositionsInRow(positions, targetRowY);
  console.log(
    `${excluded.size} positions cannot have a beacon in row ${targetRowY}`
  );
  console.log(
    `The only possible sensor position is ${getOnlyPossiblePosition(
      positions,
      4000000
    )}`
  );
};

main1();
