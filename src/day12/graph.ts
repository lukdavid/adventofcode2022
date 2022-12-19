import {
  parseInputGrid,
  getAdjacentNodes,
  parseStartAndExit,
  buildNodeId,
} from "./parse";

interface Node {
  adjacents: string[];
  elevation: number;
  distanceToStart?: number;
  isStart?: boolean;
  isExit?: boolean;
}

class Graph {
  nodes: Record<string, Node>;
  startId: string;
  exitId: string;

  constructor(rawInput: string) {
    const grid = parseInputGrid(rawInput);
    const { start, exit } = parseStartAndExit(rawInput);
    this.startId = start;
    this.exitId = exit;
    // parse nodes
    this.nodes = {};
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const id = buildNodeId(i, j);
        const elevation = grid[i][j];
        const adjacents = getAdjacentNodes(grid, i, j);
        const node: Node = { elevation, adjacents };
        if (id === start) {
          node.isStart = true;
          node.distanceToStart = 0;
        }
        if (id === exit) {
          node.isExit = true;
        }
        this.nodes[id] = node;
      }
    }
  }

  computeDistancesFromStart() {
    const queue = [this.startId];
    while (queue.length) {
      const id = queue.shift();
      if (!id) {
        break;
      }
      const node = this.nodes[id];
      const distanceToStart = node.distanceToStart as number;
      for (const adjacent of node.adjacents) {
        const adjacentNode = this.nodes[adjacent];
        if (
          adjacentNode.distanceToStart === undefined ||
          adjacentNode.distanceToStart > distanceToStart + 1
        ) {
          adjacentNode.distanceToStart = distanceToStart + 1;
          queue.push(adjacent);
        }
      }
    }
  }
}

export default Graph;
