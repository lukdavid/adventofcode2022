import { Direction, Position } from "./types";

class Rope {
  headPosition: Position;
  tailPosition: Position;
  tailPositionHistory: Position[];

  constructor() {
    this.headPosition = { x: 0, y: 0 };
    this.tailPosition = { x: 0, y: 0 };
    this.tailPositionHistory = [];
  }

  catchUpTail() {
    const xDifference = this.headPosition.x - this.tailPosition.x;
    const yDifference = this.headPosition.y - this.tailPosition.y;
    if (xDifference === 0 && yDifference > 1) {
      this.tailPosition.y += 1;
    }
    if (xDifference === 0 && yDifference < -1) {
      this.tailPosition.y -= 1;
    }
    if (yDifference === 0 && xDifference > 1) {
      this.tailPosition.x += 1;
    }
    if (yDifference === 0 && xDifference < -1) {
      this.tailPosition.x -= 1;
    }
  }

  moveHead(direction: Direction, distance: number) {
    for (let i = 0; i < distance; i++) {
      switch (direction) {
        case Direction.Up:
          this.headPosition.y += 1;
          break;
        case Direction.Down:
          this.headPosition.y -= 1;
          break;
        case Direction.Left:
          this.headPosition.x -= 1;
          break;
        case Direction.Right:
          this.headPosition.x += 1;
          break;
      }
      this.tailPositionHistory.push(this.tailPosition);
      this.catchUpTail();
    }
  }
}

export default Rope;
