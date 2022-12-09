import Rope from "../rope";
import { Direction } from "../types";

describe("Rope", () => {
  it("Should instanciate a rope", () => {
    const rope = new Rope();
    expect(rope).toBeInstanceOf(Rope);
    expect(rope.headPosition).toEqual({ x: 0, y: 0 });
    expect(rope.tailPosition).toEqual({ x: 0, y: 0 });
    expect(rope.tailPositionHistory).toEqual([]);
  });

  it("Should move head 1 step in either direction", () => {
    const rope = new Rope();
    rope.moveHead(Direction.Up, 1);
    expect(rope.headPosition).toEqual({ x: 0, y: 1 });
    rope.moveHead(Direction.Down, 1);
    expect(rope.headPosition).toEqual({ x: 0, y: 0 });
    rope.moveHead(Direction.Right, 1);
    expect(rope.headPosition).toEqual({ x: 1, y: 0 });
    rope.moveHead(Direction.Left, 1);
    expect(rope.headPosition).toEqual({ x: 0, y: 0 });
    rope.moveHead(Direction.Left, 1);
    expect(rope.headPosition).toEqual({ x: -1, y: 0 });
  });

  it("Should move head several steps in either direction", () => {
    const rope = new Rope();
    rope.moveHead(Direction.Up, 3);
    expect(rope.headPosition).toEqual({ x: 0, y: 3 });
    rope.moveHead(Direction.Left, 2);
    expect(rope.headPosition).toEqual({ x: -2, y: 3 });
  });

  it("Tail should catch up with head if in a row or column", () => {
    const ropeVertical = new Rope();
    ropeVertical.moveHead(Direction.Up, 3);
    expect(ropeVertical.headPosition).toEqual({ x: 0, y: 3 });
    expect(ropeVertical.tailPosition).toEqual({ x: 0, y: 2 });
    const ropeHorizontal = new Rope();
    ropeHorizontal.moveHead(Direction.Right, 2);
    expect(ropeHorizontal.tailPosition).toEqual({ x: 1, y: 0 });
  });
});
