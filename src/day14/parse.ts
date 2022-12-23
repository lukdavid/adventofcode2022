import { Bounds } from "./types";

export const parsePaths = (raw: string): number[][][] => {
  const lines = raw.trim().split("\n");
  return lines.map((line: string) =>
    line.split(/->/g).map((position) =>
      position
        .trim()
        .split(",")
        .map((coord) => parseInt(coord))
    )
  );
};

export const getBounds = (paths: number[][][]): Bounds => {
  const bounds: Bounds = {
    minX: Infinity,
    minY: Infinity,
    maxX: 0,
    maxY: 0,
  };
  paths.forEach((path: number[][]) => {
    path.forEach((position: number[]) => {
      const [x, y] = position;
      if (x < bounds.minX) {
        bounds.minX = x;
      }
      if (x > bounds.maxX) {
        bounds.maxX = x;
      }
      if (y < bounds.minY) {
        bounds.minY = y;
      }
      if (y > bounds.maxY) {
        bounds.maxY = y;
      }
    });
  });
  return bounds;
};
