import Graph from "../graph";
import { readFileSync } from "fs";

const testInput = readFileSync(`${__dirname}/testInput.txt`, "utf8").toString();

describe("Graph", () => {
  it("Should build a graph from a raw input", () => {
    const graph = new Graph(testInput);
    expect(graph.nodes).toHaveLength(40);
    expect(graph.nodes[0].id).toBe("0,0");
    expect(graph.nodes[0].adjacents).toEqual(["1,0", "0,1"]);
    expect(graph.nodes[0].elevation).toBe(1);
    expect(graph.nodes[0].isStart).toBe(true);
    expect(graph.nodes[39].id).toBe("4,7");
    expect(graph.nodes.find(({ isExit }) => isExit)?.id).toBe("2,5");
  });
});
