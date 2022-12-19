import {
  parseInputGrid,
  getAdjacentNodes,
  parseStartAndExit,
  buildNodeId,
} from "./parse";

interface Node {
  id: string;
  adjacents: string[];
  elevation: number;
  distanceToStart?: number;
  isStart?: boolean;
  isExit?: boolean;
}

class Graph {
  nodes: Node[];

  constructor(rawInput: string) {
    const grid = parseInputGrid(rawInput);
    const { start, exit } = parseStartAndExit(rawInput);
    // parse nodes
    this.nodes = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const id = buildNodeId(i, j);
        const elevation = grid[i][j];
        const adjacents = getAdjacentNodes(grid, i, j);
        const node: Node = { id, elevation, adjacents };
        if (id === start) {
          node.isStart = true;
          node.distanceToStart = 0;
        }
        if (id === exit) {
          node.isExit = true;
        }
        this.nodes.push(node);
      }
    }
  }
}

export default Graph;
