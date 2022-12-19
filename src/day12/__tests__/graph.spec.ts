import Graph from "../graph";
import { readFileSync } from "fs";

const testInput = readFileSync(`${__dirname}/testInput.txt`, "utf8").toString();

describe("Graph", () => {
  it("Should build a graph from a raw input", () => {
    const graph = new Graph(testInput);
    expect(Object.keys(graph.nodes)).toHaveLength(40);
    expect(graph.startId).toBe("0,0");
    expect(graph.exitId).toBe("2,5");
    expect(graph.nodes["0,0"].isStart).toBeTruthy();
    expect(graph.nodes["0,0"].adjacents).toEqual(["1,0", "0,1"]);
    expect(graph.nodes["0,0"].elevation).toBe(1);
    expect(graph.nodes["2,5"].elevation).toBe(26);
    expect(graph.nodes["2,5"].isExit).toBeTruthy();
  });

  it("Should find the length shortest path from start to end", () => {
    const graph = new Graph(testInput);
    graph.computeDistancesFromStart();
    expect(graph.nodes[graph.exitId].distanceToStart).toBe(31);
  });
});
