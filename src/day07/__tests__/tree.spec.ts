import Tree from "../tree";
import { Dir, File } from "../types";
import { TEST_DIRS as TEST_INPUT_DIRS } from "./parse.spec";

const TEST_DIRS: Dir[] = [
  {
    name: "/",
    files: [],
    children: [
      { name: "a", files: [] },
      { name: "b", files: [{ name: "file.txt", size: 90 }] },
      {
        name: "c",
        files: [],
        children: [
          { name: "d", files: [] },
          { name: "e", files: [] },
        ],
      },
    ],
  },
];

const getTestDirs = (): Dir[] => JSON.parse(JSON.stringify(TEST_DIRS));

describe("Tree class and methods", () => {
  it("Should instanciate a tree", () => {
    const tree = new Tree([{ name: "/", files: [] }]);
    expect(tree.dirs).toEqual([{ name: "/", files: [] }]);
  });

  it("Should get dir at a given path", () => {
    const tree = new Tree(getTestDirs());
    expect(tree.getDir(["/", "a"])).toEqual({ name: "a", files: [] });
    expect(tree.getDir(["/", "c", "d"])).toEqual({ name: "d", files: [] });
  });

  it("Should throw error when trying to get dir at not existing path", () => {
    const tree = new Tree(getTestDirs());
    expect(() => tree.getDir(["/", "k"])).toThrowError();
  });

  it("Should add dir at given path", () => {
    const dir: Dir = { name: "f", files: [] };
    const tree = new Tree(getTestDirs());
    tree.addDir(["/", "a"], dir);
    expect(tree.getDir(["/", "a", "f"])).toEqual(dir);
    tree.addDir(["/", "c"], dir);
    expect(tree.getDir(["/", "c", "f"])).toEqual(dir);
  });

  it("Should add file in dir", () => {
    const file: File = { name: "file.txt", size: 90 };
    const tree = new Tree(getTestDirs());
    tree.addFile(["/", "a"], file);
    expect(tree.getDir(["/", "a"])).toEqual({ name: "a", files: [file] });
  });

  it("Should compute the cumulative sum of file sizes", () => {
    const tree = new Tree(TEST_INPUT_DIRS);
    tree.computeDirectorySizes();
    expect(tree.getDir(["/", "a", "e"]).size).toBe(584);
    expect(tree.getDir(["/", "a"]).size).toBe(94853);
    expect(tree.getDir(["/", "d"]).size).toBe(24933642);
    expect(tree.getDir(["/"]).size).toBe(48381165);
  });

  it("Should find out the directories with size lower than a given size", () => {
    const tree = new Tree(TEST_INPUT_DIRS);
    expect(tree.findDirsSmallerThan(100000)).toEqual([
      { name: "a", size: 94853 },
      { name: "e", size: 584 },
    ]);
  });

  it("Should find out the directories with size greater than a given size", () => {
    const tree = new Tree(TEST_INPUT_DIRS);
    expect(tree.findDirsBiggerThan(8381165)).toEqual([
      { name: "/", size: 48381165 },
      { name: "d", size: 24933642 },
    ]);
  });
});
