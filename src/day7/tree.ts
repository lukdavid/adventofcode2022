import { File, Dir } from "./types";

class Tree {
  dirs: Dir[];

  constructor(initialDirs: Dir[]) {
    this.dirs = initialDirs;
  }

  getDir(path: string[]): Dir {
    const nextDir = this.dirs.find(({ name }) => name === path[0]);
    if (!nextDir) {
      throw new Error(`No dir found at ${path}`);
    }
    if (path.length === 1) {
      return nextDir;
    } else {
      if (!nextDir.children) {
        throw new Error(`No children found at ${path}`);
      }
      return new Tree(nextDir.children).getDir(path.slice(1));
    }
  }

  addDir(parentPath: string[], dir: Dir): void {
    const parentDir = this.getDir(parentPath);
    if (!parentDir.children) {
      parentDir.children = [dir];
    } else {
      parentDir.children.push(dir);
    }
  }

  addFile(path: string[], file: File): void {
    const dir = this.getDir(path);
    dir.files.push(file);
  }

  computeDirectorySizes(): number {
    for (const dir of this.dirs) {
      dir.size = dir.files.reduce((acc, { size }) => acc + size, 0);
      if (dir.children) {
        dir.size += new Tree(dir.children).computeDirectorySizes();
      }
    }
    return this.dirs.reduce((acc, { size }) => acc + (size || 0), 0);
  }

  findDirsSmallerThan(maxSize: number) {
    const list: Pick<Dir, "name" | "size">[] = [];
    this.computeDirectorySizes();
    for (const dir of this.dirs) {
      if (!dir.size) {
        throw new Error("No size");
      }
      if (dir.size <= maxSize) {
        list.push({ name: dir.name, size: dir.size });
      }
      if (dir.children) {
        list.push(...new Tree(dir.children).findDirsSmallerThan(maxSize));
      }
    }
    return list;
  }

  findDirsBiggerThan(minSize: number) {
    const list: Pick<Dir, "name" | "size">[] = [];
    this.computeDirectorySizes();
    for (const dir of this.dirs) {
      if (!dir.size) {
        throw new Error("No size");
      }
      if (dir.size >= minSize) {
        list.push({ name: dir.name, size: dir.size });
      }
      if (dir.children) {
        list.push(...new Tree(dir.children).findDirsBiggerThan(minSize));
      }
    }
    return list;
  }
}

export default Tree;
