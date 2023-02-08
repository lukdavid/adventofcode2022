import { Position } from "./types";

export const parsePositions = (raw: string): Position[] => {
  const lines = raw.trim().split("\n");
  return lines.map((line) => {
    const xs = line.match(/x=(-?\d+)/g)?.map((x) => parseInt(x.slice(2)));
    const ys = line.match(/y=(-?\d+)/g)?.map((y) => parseInt(y.slice(2)));
    if (xs?.length !== 2 || ys?.length !== 2) {
      throw new Error(`Could not parse line ${line}`);
    }
    return {
      sensor: [xs[0], ys[0]],
      beacon: [xs[1], ys[1]],
    };
  });
};
