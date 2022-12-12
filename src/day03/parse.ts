import { readFileSync } from "fs";

export const parseInput = (fileName: string): string[] => {
  const raw = readFileSync(fileName).toString();
  return raw.trim().split("\n");
};
