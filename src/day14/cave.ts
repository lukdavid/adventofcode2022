import { getBounds } from "./parse";
import { Bounds } from "./types";

class Cave {
  bounds: Bounds;
  paths: number[][][];
  dropFromX: number;
  scan: string[][];
  isInfiniteFlow: boolean;
  sandsUnitsDropped: number;

  constructor(paths: number[][][]) {
    this.paths = paths = JSON.parse(JSON.stringify(paths));
    this.isInfiniteFlow = false;
    this.sandsUnitsDropped = 0;
    this.bounds = getBounds(paths);
    const { minX, maxX, maxY } = this.bounds;
    const scan = new Array(maxY + 1)
      .fill(0)
      .map(() => new Array(maxX - minX + 1).fill("."));
    this.dropFromX = 500 - minX;

    this.scan = JSON.parse(JSON.stringify(scan));

    this.scan[0][this.dropFromX] = "+";
  }

  fillPaths() {
    // fill paths
    const minX = this.bounds.minX;
    this.paths.forEach((path) => {
      while (path.length > 1) {
        const start = path.shift() as number[];
        const [x1, y1] = start;
        const [x2, y2] = path[0];
        const xStart = Math.min(x1, x2) - minX;
        const xEnd = Math.max(x1, x2) - minX;
        const yStart = Math.min(y1, y2);
        const yEnd = Math.max(y1, y2);
        for (let x = xStart; x <= xEnd; x++) {
          for (let y = yStart; y <= yEnd; y++) {
            this.scan[y][x] = "#";
          }
        }
      }
    });
  }

  toString() {
    return this.scan.map((row) => row.join("")).join("\n");
  }
}

export default Cave;
