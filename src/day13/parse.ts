import { readFileSync } from "fs";
import { Packet } from "./types";

export const parsePairs = (filePath: string): [string, string][] => {
  const raw = readFileSync(filePath, "utf8").toString().trim();
  return raw.split(/\n\n/g).map((pair) => {
    const [left, right] = pair.split(/\n/g);
    return [left, right];
  });
};

export const parsePacket = (raw: string): Packet => {
  return JSON.parse(raw);
};
