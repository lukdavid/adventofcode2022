import { Direction, Position } from "./types";

const startPosition = { x: 0, y: 0 };

class Rope {
  length: number;
  nodePositions: Position[];
  tailPositionHistory: Position[];

  constructor(length: number) {
    if (length < 2) {
      throw new Error("Rope length must be at least 2");
    }
    this.length = length;
    this.nodePositions = [];
    for (let i = 0; i < length; i++) {
      this.nodePositions.push({ ...startPosition }); // must get copies of the object
    }
    this.tailPositionHistory = [{ ...startPosition }];
  }

  catchUpTail() {
    for (let i = 1; i < this.length; i++) {
      const xDifference = this.nodePositions[i - 1].x - this.nodePositions[i].x;
      const yDifference = this.nodePositions[i - 1].y - this.nodePositions[i].y;
      // straight lines
      if (xDifference === 0 && yDifference > 1) {
        this.nodePositions[i].y += 1;
      } else if (xDifference === 0 && yDifference < -1) {
        this.nodePositions[i].y -= 1;
      } else if (yDifference === 0 && xDifference > 1) {
        this.nodePositions[i].x += 1;
      } else if (yDifference === 0 && xDifference < -1) {
        this.nodePositions[i].x -= 1;
      }
      // diagonals
      else if (Math.abs(xDifference) >= 1 && Math.abs(yDifference) >= 1) {
        if (Math.abs(xDifference * yDifference) > 1) {
          this.nodePositions[i].x += xDifference > 0 ? 1 : -1;
          this.nodePositions[i].y += yDifference > 0 ? 1 : -1;
        }
      }
    }
  }

  moveHead(direction: Direction, distance: number) {
    for (let i = 0; i < distance; i++) {
      switch (direction) {
        case Direction.Up:
          this.nodePositions[0].y += 1;
          break;
        case Direction.Down:
          this.nodePositions[0].y -= 1;
          break;
        case Direction.Left:
          this.nodePositions[0].x -= 1;
          break;
        case Direction.Right:
          this.nodePositions[0].x += 1;
          break;
      }
      this.catchUpTail();
      this.tailPositionHistory.push({ ...this.nodePositions[this.length - 1] });
    }
  }

  getUniquePositionsVisitedByTail() {
    return new Set(
      this.tailPositionHistory.map((position) => `${position.x},${position.y}`)
    ).size;
  }
}

export default Rope;
