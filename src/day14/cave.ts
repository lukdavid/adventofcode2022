/* eslint-disable no-constant-condition */
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

  sandDown(x: number, y: number): number[] {
    if (y === this.scan.length - 1) {
      this.isInfiniteFlow = true;
      return [x, Infinity];
    }
    if (this.scan[y + 1][x] === ".") {
      this.scan[y + 1][x] = "o";
      this.scan[y][x] = ".";
      return [x, y + 1];
    }
    // cant go down : diagonal left
    if (x === 0) {
      this.isInfiniteFlow = true;
      return [x - 1, Infinity];
    }
    if (this.scan[y + 1][x - 1] === ".") {
      this.scan[y + 1][x - 1] = "o";
      this.scan[y][x] = ".";
      return [x - 1, y + 1];
    }
    // can't go down or diagonal left : diagonal right
    if (x === this.scan[0].length - 1) {
      this.isInfiniteFlow = true;
      return [x + 1, Infinity];
    }
    if (this.scan[y + 1][x + 1] === ".") {
      this.scan[y + 1][x + 1] = "o";
      this.scan[y][x] = ".";
      return [x + 1, y + 1];
    }
    return [x, y];
  }

  dropSand() {
    let x = this.dropFromX;
    let y = 0;
    while (!this.isInfiniteFlow) {
      const [newX, newY] = this.sandDown(x, y);
      if (newX === x && newY === y) {
        break;
      }
      x = newX;
      y = newY;
    }
    this.scan[0][this.dropFromX] = "+";
    this.sandsUnitsDropped += 1;
    // console.log(this.toString(), this.sandsUnitsDropped);
  }

  fill() {
    while (!this.isInfiniteFlow) {
      this.dropSand();
    }
    this.sandsUnitsDropped -= 1; // the last unit goes to infinity
  }

  toString() {
    return this.scan.map((row) => row.join("")).join("\n");
  }
}

export default Cave;
