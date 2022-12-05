import { readFileSync } from "fs";
import { CrateId, Move } from "./types";

const parseMoves = (rawMoves: string): Move[] => {
  const lines = rawMoves.split("\n");
  return lines.map((line) => {
    const words = line.split(/\s+/g);
    return {
      num: parseInt(words[1]),
      from: words[3],
      to: words[5],
    };
  });
};

const parseStacks = (rawStacks: string): Record<CrateId, string[]> => {
  const rawLines = rawStacks.split("\n");
  const rawIds = rawLines.pop() as string;
  const stackIds = rawIds.split(/\s+/g).filter(Boolean);
  const stacks: Record<CrateId, string[]> = {};
  stackIds.forEach((stackId) => {
    const num = parseInt(stackId);
    const index = (num - 1) * 4 + 1; // index of the crateId char
    stacks[stackId] = rawLines
      .map((line) => line[index])
      .filter((crateId) => crateId !== " ")
      .reverse();
  });
  return stacks;
};

export const parseInput = (fileName: string) => {
  const raw = readFileSync(fileName).toString().trim();
  const [rawStacks, rawMoves] = raw.split("\n\n");
  return { stacks: parseStacks(rawStacks), moves: parseMoves(rawMoves) };
};
