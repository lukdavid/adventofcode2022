import { Dir, File } from "./types";
import Tree from "./tree";

export const parseFileLine = (line: string): File => {
  const [size, name] = line.trim().split(/\s+/);
  return { name, size: parseInt(size) };
};

export const parseDirLine = (line: string): Dir => {
  const name = line.trim().split(/\s+/)[1];
  return { name, files: [] };
};

export const parseTree = (input: string): Tree => {
  const [first, ...lines] = input.split(/\n+/g);
  const rootDir = first.split(/\s+/)[2];
  const tree = new Tree([{ name: rootDir, files: [] }]);
  const path = [rootDir];
  for (const line of lines) {
    if (line.startsWith("$ cd")) {
      const dirName = line.split(/\s+/)[2];
      if (dirName === "..") {
        path.splice(-1, 1);
      } else {
        path.push(dirName);
      }
    } else if (line.startsWith("dir")) {
      // dir
      const dir = parseDirLine(line);
      tree.addDir(path, dir);
    } else if (/^[0-9]/.test(line)) {
      // file
      const file = parseFileLine(line);
      tree.addFile(path, file);
    }
  }
  return tree;
};
