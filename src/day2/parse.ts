import { readFileSync } from "fs";
import { RoundsList } from "./types";

export const parseInput = (filePath: string): RoundsList => {
  const rawInput = readFileSync(filePath).toString();
  return rawInput.split(/\n+/g).map((line) => line.split(/\s+/));
};
