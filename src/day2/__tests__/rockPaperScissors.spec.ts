import RockPaperScissors from "../RockPaperScissors";
import { RoundOutput } from "../types";

const TEST_MAPPING_1 = ["A", "B", "C"];
const TEST_MAPPING_2 = ["X", "Y", "Z"];

describe("RockPapperScissors class", () => {
  it("Should correctly compute Shape index", () => {
    const rockPaperScissors = new RockPaperScissors(
      TEST_MAPPING_1,
      TEST_MAPPING_2
    );
    expect(rockPaperScissors.getShapeIndex("A", "opponent")).toBe(0);
    expect(rockPaperScissors.getShapeIndex("B", "opponent")).toBe(1);
    expect(rockPaperScissors.getShapeIndex("C", "opponent")).toBe(2);
    expect(() => {
      rockPaperScissors.getShapeIndex("D", "opponent");
    }).toThrowError();
    expect(rockPaperScissors.getShapeIndex("X", "mine")).toBe(0);
    expect(rockPaperScissors.getShapeIndex("Y", "mine")).toBe(1);
    expect(rockPaperScissors.getShapeIndex("Z", "mine")).toBe(2);
    expect(() => {
      rockPaperScissors.getShapeIndex("D", "mine");
    }).toThrowError();
  });

  it("Should compute whether I win or loose a round", () => {
    const rockPaperScissors = new RockPaperScissors(
      TEST_MAPPING_1,
      TEST_MAPPING_2
    );
    expect(rockPaperScissors.getRoundOutput("A", "Y")).toBe(
      RoundOutput.VICTORY
    );
    expect(rockPaperScissors.getRoundOutput("B", "X")).toBe(RoundOutput.DEFEAT);
    expect(rockPaperScissors.getRoundOutput("C", "Z")).toBe(RoundOutput.DRAW);
  });

  it("Should compute score based on shape", () => {
    const rockPaperScissors = new RockPaperScissors(
      TEST_MAPPING_1,
      TEST_MAPPING_2
    );
    expect(rockPaperScissors.getShapeScore("A", "opponent")).toBe(1);
    expect(rockPaperScissors.getShapeScore("B", "opponent")).toBe(2);
    expect(rockPaperScissors.getShapeScore("C", "opponent")).toBe(3);
    expect(rockPaperScissors.getShapeScore("X", "mine")).toBe(1);
    expect(rockPaperScissors.getShapeScore("Y", "mine")).toBe(2);
    expect(rockPaperScissors.getShapeScore("Z", "mine")).toBe(3);
  });

  it("Should compute the output score for a round output", () => {
    const rockPaperScissors = new RockPaperScissors(
      TEST_MAPPING_1,
      TEST_MAPPING_2
    );
    expect(rockPaperScissors.getRoundOutputScore(RoundOutput.VICTORY)).toBe(3);
    expect(rockPaperScissors.getRoundOutputScore(RoundOutput.DRAW)).toBe(1);
    expect(rockPaperScissors.getRoundOutputScore(RoundOutput.DEFEAT)).toBe(0);
  });

  it.skip("Should compute the output score of a round", () => {
    const rockPaperScissors = new RockPaperScissors(
      TEST_MAPPING_1,
      TEST_MAPPING_2
    );
    expect(rockPaperScissors.playRound("A", "Y")).toEqual({
      output: RoundOutput.VICTORY,
      score: 8,
    });
    expect(rockPaperScissors.playRound("B", "X")).toEqual({
      output: RoundOutput.DEFEAT,
      score: 1,
    });
    expect(rockPaperScissors.playRound("C", "Z")).toEqual({
      output: RoundOutput.DRAW,
      score: 6,
    });
    expect(rockPaperScissors.score).toBe(15);
    expect(rockPaperScissors.gamesPlayed).toEqual([
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ]);
  });
});
