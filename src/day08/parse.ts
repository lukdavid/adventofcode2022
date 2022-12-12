import { readFileSync } from "fs";

export const parseInput = (fileName: string): number[][] => {
  const raw = readFileSync(fileName, "utf8").toString().trim();
  return raw
    .split(/\n+/g)
    .map((line) => line.split("").map((char) => parseInt(char)));
};
