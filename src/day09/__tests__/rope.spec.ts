import Rope from "../rope";
import { Direction } from "../types";
import { PARSED_INPUT, PARSED_INPUT_2 } from "./parse.spec";

describe("Rope", () => {
  it("Should instanciate a rope", () => {
    const rope = new Rope(2);
    expect(rope).toBeInstanceOf(Rope);
    expect(rope.nodePositions[0]).toEqual({ x: 0, y: 0 });
    expect(rope.nodePositions[rope.length - 1]).toEqual({ x: 0, y: 0 });
    expect(rope.tailPositionHistory).toEqual([{ x: 0, y: 0 }]);
  });

  it("Should move head 1 step in either direction", () => {
    const rope = new Rope(2);
    rope.moveHead(Direction.Up, 1);
    expect(rope.nodePositions[0]).toEqual({ x: 0, y: 1 });
    rope.moveHead(Direction.Down, 1);
    expect(rope.nodePositions[0]).toEqual({ x: 0, y: 0 });
    rope.moveHead(Direction.Right, 1);
    expect(rope.nodePositions[0]).toEqual({ x: 1, y: 0 });
    rope.moveHead(Direction.Left, 1);
    expect(rope.nodePositions[0]).toEqual({ x: 0, y: 0 });
    rope.moveHead(Direction.Left, 1);
    expect(rope.nodePositions[0]).toEqual({ x: -1, y: 0 });
  });

  it("Should move head several steps in either direction", () => {
    const rope = new Rope(2);
    rope.moveHead(Direction.Up, 3);
    expect(rope.nodePositions[0]).toEqual({ x: 0, y: 3 });
    rope.moveHead(Direction.Left, 2);
    expect(rope.nodePositions[0]).toEqual({ x: -2, y: 3 });
  });

  it("Tail should catch up with head if in a row or column", () => {
    const ropeVertical = new Rope(2);
    ropeVertical.moveHead(Direction.Up, 3);
    expect(ropeVertical.nodePositions[0]).toEqual({ x: 0, y: 3 });
    expect(ropeVertical.nodePositions[ropeVertical.length - 1]).toEqual({
      x: 0,
      y: 2,
    });
    const ropeHorizontal = new Rope(2);
    ropeHorizontal.moveHead(Direction.Right, 2);
    expect(ropeHorizontal.nodePositions[ropeHorizontal.length - 1]).toEqual({
      x: 1,
      y: 0,
    });
  });

  it("Tail should catch up with head in diagonal", () => {
    const ropeDiagonal = new Rope(2);
    ropeDiagonal.moveHead(Direction.Right, 3);
    ropeDiagonal.moveHead(Direction.Up, 2);
    expect(ropeDiagonal.nodePositions[ropeDiagonal.length - 1]).toEqual({
      x: 3,
      y: 1,
    });
  });

  it("Head and Tail should have the right position in test input", () => {
    const rope = new Rope(2);
    for (const move of PARSED_INPUT) {
      rope.moveHead(move.direction, move.distance);
    }
    expect(rope.nodePositions[0]).toEqual({ x: 2, y: 2 });
    expect(rope.nodePositions[rope.length - 1]).toEqual({ x: 1, y: 2 });
  });

  it("Should compute the number of positions visited at least once by the tail", () => {
    const rope = new Rope(2);
    for (const move of PARSED_INPUT) {
      rope.moveHead(move.direction, move.distance);
    }
    expect(rope.getUniquePositionsVisitedByTail()).toEqual(13);
  });

  it("Should compute the number of positions visited at least once by the tail with length 10", () => {
    const rope = new Rope(10);
    for (const move of PARSED_INPUT) {
      rope.moveHead(move.direction, move.distance);
    }
    expect(rope.getUniquePositionsVisitedByTail()).toEqual(1);
  });

  it("Should compute the number of positions visited at least once by the tail with length 10, test input 2", () => {
    const rope = new Rope(10);
    for (const move of PARSED_INPUT_2) {
      rope.moveHead(move.direction, move.distance);
    }
    expect(rope.getUniquePositionsVisitedByTail()).toEqual(36);
  });
});
