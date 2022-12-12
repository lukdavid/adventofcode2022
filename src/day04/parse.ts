import { readFileSync } from "fs";

export const parseLine = (line: string): number[][] =>
  line.split(",").map((pair) => pair.split("-").map((zone) => parseInt(zone)));

export const parseInput = (fileName: string): number[][][] => {
  const raw = readFileSync(fileName).toString().trim();
  const lines = raw.split(/\n/);
  return lines.map((line) => parseLine(line));
};
