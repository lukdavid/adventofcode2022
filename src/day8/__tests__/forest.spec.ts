import { PARSED_TEST_INPUT } from "./parse.spec";
import Forest from "../forest";

const defaultComputedTreeProps = { visible: false, scenicScore: 0 };

describe("Forest class and methods", () => {
  it("Should instanciate a forest from parsed input", () => {
    const forest = new Forest(PARSED_TEST_INPUT);
    expect(forest.visibilityComputed).toBeFalsy();
    expect(forest.scenicScoresComputed).toBeFalsy();
    expect(forest.trees).toEqual([
      [
        { height: 3, ...defaultComputedTreeProps },
        { height: 0, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
        { height: 7, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
      ],
      [
        { height: 2, ...defaultComputedTreeProps },
        { height: 5, ...defaultComputedTreeProps },
        { height: 5, ...defaultComputedTreeProps },
        { height: 1, ...defaultComputedTreeProps },
        { height: 2, ...defaultComputedTreeProps },
      ],
      [
        { height: 6, ...defaultComputedTreeProps },
        { height: 5, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
        { height: 2, ...defaultComputedTreeProps },
      ],
      [
        { height: 3, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
        { height: 5, ...defaultComputedTreeProps },
        { height: 4, ...defaultComputedTreeProps },
        { height: 9, ...defaultComputedTreeProps },
      ],
      [
        { height: 3, ...defaultComputedTreeProps },
        { height: 5, ...defaultComputedTreeProps },
        { height: 3, ...defaultComputedTreeProps },
        { height: 9, ...defaultComputedTreeProps },
        { height: 0, ...defaultComputedTreeProps },
      ],
    ]);
    expect(forest.height).toBe(5);
    expect(forest.width).toBe(5);
  });

  it("Should compute trees visibility", () => {
    const forest = new Forest(PARSED_TEST_INPUT);
    forest.computeVisibility();
    expect(forest.visibilityComputed).toBeTruthy();
    expect(forest.trees).toEqual([
      [
        { height: 3, visible: true, scenicScore: 0 },
        { height: 0, visible: true, scenicScore: 0 },
        { height: 3, visible: true, scenicScore: 0 },
        { height: 7, visible: true, scenicScore: 0 },
        { height: 3, visible: true, scenicScore: 0 },
      ],
      [
        { height: 2, visible: true, scenicScore: 0 },
        { height: 5, visible: true, scenicScore: 0 },
        { height: 5, visible: true, scenicScore: 0 },
        { height: 1, visible: false, scenicScore: 0 },
        { height: 2, visible: true, scenicScore: 0 },
      ],
      [
        { height: 6, visible: true, scenicScore: 0 },
        { height: 5, visible: true, scenicScore: 0 },
        { height: 3, visible: false, scenicScore: 0 },
        { height: 3, visible: true, scenicScore: 0 },
        { height: 2, visible: true, scenicScore: 0 },
      ],
      [
        { height: 3, visible: true, scenicScore: 0 },
        { height: 3, visible: false, scenicScore: 0 },
        { height: 5, visible: true, scenicScore: 0 },
        { height: 4, visible: false, scenicScore: 0 },
        { height: 9, visible: true, scenicScore: 0 },
      ],
      [
        { height: 3, visible: true, scenicScore: 0 },
        { height: 5, visible: true, scenicScore: 0 },
        { height: 3, visible: true, scenicScore: 0 },
        { height: 9, visible: true, scenicScore: 0 },
        { height: 0, visible: true, scenicScore: 0 },
      ],
    ]);
  });

  it("Should compute number of visible trees", () => {
    const forest = new Forest(PARSED_TEST_INPUT);
    forest.computeVisibility();
    expect(forest.countVisibleTrees()).toBe(21);
  });

  it("Should compute trees scenic scores", () => {
    const forest = new Forest(PARSED_TEST_INPUT);
    // forest.computeTreeScenicScores();
    // expect(forest.scenicScoresComputed).toBeTruthy();
    expect(forest.getTreeScenicScore(1, 2)).toBe(4);
    expect(forest.getTreeScenicScore(3, 2)).toBe(8);
  });

  it("Should compute best scenic score", () => {
    const forest = new Forest(PARSED_TEST_INPUT);
    expect(forest.getBestScenicScore()).toBe(8);
  });
});
