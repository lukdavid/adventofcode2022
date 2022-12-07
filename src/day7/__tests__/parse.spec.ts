import { parseFileLine, parseDirLine, parseTree } from "../parse";
import { Dir } from "../types";
import { readFileSync } from "fs";

export const TEST_DIRS: Dir[] = [
  {
    name: "/",
    files: [
      { name: "b.txt", size: 14848514 },
      { name: "c.dat", size: 8504156 },
    ],
    children: [
      {
        name: "a",
        files: [
          { name: "f", size: 29116 },
          { name: "g", size: 2557 },
          { name: "h.lst", size: 62596 },
        ],
        children: [{ name: "e", files: [{ name: "i", size: 584 }] }],
      },
      {
        name: "d",
        files: [
          { name: "j", size: 4060174 },
          { name: "d.log", size: 8033020 },
          { name: "d.ext", size: 5626152 },
          { name: "k", size: 7214296 },
        ],
      },
    ],
  },
];

describe("Parse input utils", () => {
  it("Should parse file line", () => {
    const line = "14848514 b.txt";
    expect(parseFileLine(line)).toEqual({ name: "b.txt", size: 14848514 });
  });

  it("Should parse dir line", () => {
    const line = "dir d";
    expect(parseDirLine(line)).toEqual({
      name: "d",
      files: [],
    });
  });

  it("Should parse and populate input file", () => {
    const raw = readFileSync(`${__dirname}/testInput.txt`, "utf8").toString();
    const tree = parseTree(raw);
    expect(tree.dirs).toEqual(TEST_DIRS);
  });
});
