import { Position } from "./types";
import { diffSet } from "./set";

export const manhattanDistance = (a: number[], b: number[]): number => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

export const getXOverlapRange = (
  reference: number[],
  range: number,
  row: number
): Set<number> => {
  const [x, y] = reference;
  const distance = Math.abs(row - y);
  if (distance > range) {
    return new Set();
  }
  const min = x - (range - distance);
  const max = x + (range - distance);
  return new Set(Array.from({ length: max - min + 1 }, (_, i) => i + min));
};

export const getExcludedPositionsInRow = (
  positions: Position[],
  row: number,
  filter = true
): Set<number> => {
  const xRange = new Set<number>();
  for (const { sensor, beacon } of positions) {
    const sensorBeaconDistance = manhattanDistance(sensor, beacon);
    const overlap = getXOverlapRange(sensor, sensorBeaconDistance, row);
    overlap.forEach((x) => xRange.add(x));
    if (sensor[1] === row && filter) {
      xRange.delete(sensor[0]);
    }
    if (beacon[1] === row && filter) {
      xRange.delete(beacon[0]);
    }
  }

  return xRange;
};

export const getOnlyPossiblePosition = (
  positions: Position[],
  size: number
): number[] => {
  const referenceSet = new Set(Array.from({ length: size }, (_, i) => i));
  for (let i = 0; i < size; i++) {
    if (i % 10 === 0) {
      console.log(i);
    }
    const excluded = getExcludedPositionsInRow(positions, i, false);
    const diff = diffSet(referenceSet, excluded, 0, size);
    if (diff.size === 1) {
      return [Array.from(diff)[0], i];
    }
  }
  throw new Error("No possible position found");
};
