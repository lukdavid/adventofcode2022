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

describe("Drops sand", () => {
  it("Drops a sand unit, increments count", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.dropSand();
    expect(cave.sandsUnitsDropped).toBe(1);
  });

  it("Sand should go down when no obstacle", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    // initiate sand drop
    cave.scan[1][cave.dropFromX] = "o";
    const [newX, newY] = cave.sandDown(cave.dropFromX, 1);
    expect(newX).toBe(cave.dropFromX);
    expect(newY).toBe(2);
    expect(cave.toString()).toEqual(
      `
......+...
..........
......o...
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

  it("Sand should go down while no obstacle", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.dropSand();
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
......o.#.
#########.
        `.trim()
    );
  });

  it("Sand should diagonal left if possible", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.dropSand();
    cave.dropSand();
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
.....oo.#.
#########.
          `.trim()
    );
  });

  it("Sand should diagonal right if possible", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.dropSand();
    cave.dropSand();
    cave.dropSand();
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
.....ooo#.
#########.
          `.trim()
    );
  });

  it("Should have good shape after 5 drops", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.dropSand();
    cave.dropSand();
    cave.dropSand();
    cave.dropSand();
    cave.dropSand();
    expect(cave.toString()).toEqual(
      `
......+...
..........
..........
..........
....#...##
....#...#.
..###...#.
......o.#.
....oooo#.
#########.
          `.trim()
    );
  });

  it("Should have good shape after 22 drops", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    for (let i = 0; i < 22; i++) {
      cave.dropSand();
    }
    expect(cave.toString()).toEqual(
      `
......+...
..........
......o...
.....ooo..
....#ooo##
....#ooo#.
..###ooo#.
....oooo#.
...ooooo#.
#########.
    `.trim()
    );
  });

  it("Should fill the cave", () => {
    const cave = new Cave(TEST_PATHS);
    cave.fillPaths();
    cave.fill();
    expect(cave.sandsUnitsDropped).toBe(24);
  });

  it("Part 2 : should add the ground at y_max + 2 and find correct number of units to fill", () => {
    const maxY = 9;
    const cave = new Cave([
      ...TEST_PATHS,
      [
        [500 - (maxY + 2), maxY + 2],
        [500 + (maxY + 2), maxY + 2],
      ],
    ]);
    cave.fillPaths();
    cave.fill();
    // console.log(cave.toString());
    expect(cave.sandsUnitsDropped).toBe(93);
  });
});
