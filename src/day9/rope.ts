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
    // straight lines
    if (xDifference === 0 && yDifference > 1) {
      this.tailPosition.y += 1;
      return;
    }
    if (xDifference === 0 && yDifference < -1) {
      this.tailPosition.y -= 1;
      return;
    }
    if (yDifference === 0 && xDifference > 1) {
      this.tailPosition.x += 1;
      return;
    }
    if (yDifference === 0 && xDifference < -1) {
      this.tailPosition.x -= 1;
      return;
    }
    // diagonals
    if (Math.abs(xDifference) >= 1 && Math.abs(yDifference) >= 1) {
      if (Math.abs(xDifference * yDifference) > 1) {
        this.tailPosition.x += xDifference > 0 ? 1 : -1;
        this.tailPosition.y += yDifference > 0 ? 1 : -1;
        return;
      }
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
      this.tailPositionHistory.push({ ...this.tailPosition });
      this.catchUpTail();
      // console.log(this.headPosition, this.tailPosition);
    }
  }

  getUniquePositionsVisitedByTail() {
    return new Set(
      this.tailPositionHistory.map((position) => `${position.x},${position.y}`)
    ).size;
  }
}

export default Rope;
