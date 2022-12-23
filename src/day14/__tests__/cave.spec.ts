import Cave from "../cave";
import { TEST_PATHS } from "./parse.spec";

describe("Cave", () => {
  it("Should instanciate a cave with initial attributes", () => {
    const cave = new Cave(TEST_PATHS);
    expect(cave.isInfiniteFlow).toBe(false);
    expect(cave.sandsUnitsDropped).toBe(0);
  });

  it("Should instanciate a cave with a scan having adequate dimensions", () => {
    const cave = new Cave(TEST_PATHS);
    expect(cave.scan.length).toBe(10);
    expect(cave.scan[0].length).toBe(10);
  });

  it("Should calculate the x coord from which sand is dropped", () => {
    const cave = new Cave(TEST_PATHS);
    expect(cave.dropFromX).toBe(6);
  });

  it("Should initiate paths and start", () => {
    const cave = new Cave(TEST_PATHS);
    expect(cave.scan).toEqual([
      [".", ".", ".", ".", ".", ".", "+", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ]);
  });

  it("Should fill paths", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    expect(cave.scan).toEqual([
      [".", ".", ".", ".", ".", ".", "+", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", "#", ".", ".", ".", "#", "#"],
      [".", ".", ".", ".", "#", ".", ".", ".", "#", "."],
      [".", ".", "#", "#", "#", ".", ".", ".", "#", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      ["#", "#", "#", "#", "#", "#", "#", "#", "#", "."],
    ]);
  });

  it("Should print as string", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    expect(cave.toString()).toEqual(
      `
......+...
..........
..........
..........
....#...##
....#...#.
..###...#.
........#.
........#.
#########.
`.trim()
    );
  });
});
