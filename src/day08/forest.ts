interface Tree {
  height: number;
  visible: boolean;
  scenicScore: number;
}

class Forest {
  trees: Tree[][];
  visibilityComputed: boolean;
  scenicScoresComputed: boolean;
  height: number;
  width: number;

  constructor(treesHeights: number[][]) {
    this.visibilityComputed = false;
    this.scenicScoresComputed = false;
    this.trees = treesHeights.map((line) =>
      line.map((height) => ({ height, visible: false, scenicScore: 0 }))
    );
    this.height = treesHeights.length;
    this.width = treesHeights[0].length; // we assume it's constant (rectangle)
  }

  computeVisibilityLeftToRight() {
    for (let y = 1; y < this.height; y++) {
      let max = this.trees[y][0].height;
      this.trees[y][0].visible = true;
      for (let x = 0; x < this.trees[y].length - 1; x++) {
        const tree = this.trees[y][x];
        if (tree.height > max) {
          tree.visible = true;
          max = tree.height;
        }
      }
    }
  }

  computeVisibilityRightToLeft() {
    for (let y = 0; y < this.height; y++) {
      let max = this.trees[y][this.width - 1].height;
      this.trees[y][this.width - 1].visible = true;
      for (let x = this.width - 1; x > 0; x--) {
        const tree = this.trees[y][x];
        if (tree.height > max) {
          tree.visible = true;
          max = tree.height;
        }
      }
    }
  }

  computeVisibilityUpToDown() {
    for (let x = 0; x < this.trees[0].length; x++) {
      let max = this.trees[0][x].height;
      this.trees[0][x].visible = true;
      for (let y = 0; y < this.trees.length - 1; y++) {
        const tree = this.trees[y][x];
        if (tree.height > max) {
          tree.visible = true;
          max = tree.height;
        }
      }
    }
  }

  computeVisibilityDownToUp() {
    for (let x = 0; x < this.trees[0].length; x++) {
      let max = this.trees[this.height - 1][x].height;
      this.trees[this.height - 1][x].visible = true;
      for (let y = this.trees.length - 1; y > 0; y--) {
        const tree = this.trees[y][x];
        if (tree.height > max) {
          tree.visible = true;
          max = tree.height;
        }
      }
    }
  }
  computeVisibility() {
    this.computeVisibilityLeftToRight();
    this.computeVisibilityRightToLeft();
    this.computeVisibilityUpToDown();
    this.computeVisibilityDownToUp();
    this.visibilityComputed = true;
  }

  countVisibleTrees() {
    return this.trees.reduce((sum: number, line: Tree[]) => {
      return sum + line.filter((tree) => tree.visible).length;
    }, 0);
  }

  getTreeScenicScore(y: number, x: number) {
    if (x > this.width || y > this.height || x < 0 || y < 0) {
      throw new Error(`Invalid coordinates (${x}, ${y})`);
    }
    if (x === this.width - 1 || y === this.height - 1 || x === 0 || y === 0) {
      // on edge
      return 0;
    }
    // see how far we can reach in each direction
    const tree = this.trees[y][x];
    const visibility = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
    // on the left
    for (let i = x - 1; i >= 0; i--) {
      visibility.left += 1;
      if (this.trees[y][i].height >= tree.height) {
        break;
      }
    }
    // on the right
    for (let i = x + 1; i < this.width; i++) {
      visibility.right += 1;
      if (this.trees[y][i].height >= tree.height) {
        break;
      }
    }
    // on the top
    for (let j = y - 1; j >= 0; j--) {
      visibility.top += 1;
      if (this.trees[j][x].height >= tree.height) {
        break;
      }
    }
    // on the bottom
    for (let j = y + 1; j < this.height; j++) {
      visibility.bottom += 1;
      if (this.trees[j][x].height >= tree.height) {
        break;
      }
    }

    const scenicScore =
      visibility.left * visibility.right * visibility.top * visibility.bottom;

    return scenicScore;
  }

  getBestScenicScore(): number {
    let max = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const tree = this.trees[y][x];
        tree.scenicScore = this.getTreeScenicScore(y, x);
        if (tree.scenicScore > max) {
          max = tree.scenicScore;
        }
      }
    }
    return max;
  }
}

export default Forest;
