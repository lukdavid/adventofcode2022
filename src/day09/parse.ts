import { readFileSync } from "fs";
import { Direction } from "./types";

export const parseInput = (
  fileName: string
): { direction: Direction; distance: number }[] => {
  const raw = readFileSync(fileName, "utf-8").toString();
  return raw
    .trim()
    .split("\n")
    .map((line: string) => {
      const [direction, distance] = line.split(/\s/);
      return {
        direction: direction as Direction,
        distance: parseInt(distance),
      };
    });
};
