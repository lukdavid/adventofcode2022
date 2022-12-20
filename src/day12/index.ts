import { readFileSync } from "fs";
import Graph from "./graph";

const main = () => {
  const input = readFileSync(`${__dirname}/.data/input.txt`, "utf8").toString();
  const graph = new Graph(input);
  // Part 1
  graph.computeDistancesFromStart();
  console.log(
    `Part 1 - the shortest path from start to exit has length ${
      graph.nodes[graph.exitId].distanceToStart
    }`
  );
  // Part 2
  let minPathLength = graph.nodes[graph.exitId].distanceToStart as number;
  let i = 1;
  const startNodesCandiates = Object.keys(graph.nodes).filter(
    (id) => graph.nodes[id].elevation === 1 && !graph.nodes[id].isStart
  );
  for (const startNodeId of startNodesCandiates) {
    // reset start node
    graph.nodes[graph.startId].isStart = false;
    graph.startId = startNodeId;
    graph.nodes[graph.startId].isStart = true;
    graph.resetDistances();
    // compute distances
    graph.computeDistancesFromStart();
    // update min path length
    const pathLength = graph.nodes[graph.exitId].distanceToStart;
    console.log(`Candidate ${i}/${startNodesCandiates.length}: ${pathLength}`);
    if (pathLength !== undefined && pathLength < minPathLength) {
      minPathLength = pathLength;
    }
    i++;
  }

  console.log(
    `Part 2 - the shortest path from start to exit has length ${minPathLength}`
  );
};

main();
