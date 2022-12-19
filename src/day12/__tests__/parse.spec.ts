import {
  buildNodeId,
  parseNodeElevation,
  getAdjacentNodes,
  parseInputGrid,
} from "../parse";
import { readFileSync } from "fs";

const testInput = readFileSync(`${__dirname}/testInput.txt`, "utf8").toString();
const miniTest = `abc\nSde\nEfg`;
const parsedMiniTest = [
  [1, 2, 3],
  [1, 4, 5],
  [26, 6, 7],
];

describe("Parse input", () => {
  it("Should parse a node elevation", () => {
    expect(parseNodeElevation("a")).toBe(1);
    expect(parseNodeElevation("b")).toBe(2);
    expect(parseNodeElevation("c")).toBe(3);
    expect(parseNodeElevation("y")).toBe(25);
    expect(parseNodeElevation("z")).toBe(26);
    expect(parseNodeElevation("S")).toBe(1);
    expect(parseNodeElevation("E")).toBe(26);
    expect(() => parseNodeElevation("AA")).toThrow();
    expect(() => parseNodeElevation("X")).toThrow();
  });

  it("Should compute a node id from its coordinates", () => {
    expect(buildNodeId(0, 0)).toBe("0,0");
    expect(buildNodeId(5, 2)).toBe("5,2");
    expect(buildNodeId(12, 40)).toBe("12,40");
  });

  it("Should parse an input grid as an array of elevations", () => {
    expect(parseInputGrid(miniTest)).toEqual(parsedMiniTest);
  });

  it("Should parse a node's adjacents nodes", () => {
    const parsedTestInput = parseInputGrid(testInput);
    expect(getAdjacentNodes(parsedTestInput, 0, 0)).toEqual(["1,0", "0,1"]);
    expect(getAdjacentNodes(parsedTestInput, 1, 1).sort()).toEqual(
      ["0,1", "1,0", "2,1", "1,2"].sort()
    );
    expect(getAdjacentNodes(parsedTestInput, 2, 2).sort()).toEqual(
      ["1,2", "2,1", "3,2"].sort()
    );
    expect(getAdjacentNodes(parsedTestInput, 3, 6).sort()).toEqual(
      ["2,6", "3,5", "3,7", "4,6"].sort()
    );
    expect(getAdjacentNodes(parsedTestInput, 4, 7).sort()).toEqual(
      ["3,7", "4,6"].sort()
    );
  });

  it.todo("Should identify start and exit");

  it.todo("Should parse a graph");
});
