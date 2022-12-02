import { MappingType, RoundOutput } from "./types";

class RockPaperScissors {
  mappings: Record<MappingType, string[]>;
  roundsPlayed: string[][];
  score: number;

  constructor(
    opponentMapping: string[],
    myMapping: string[],
    initialScore = 0
  ) {
    this.mappings = {
      mine: myMapping,
      opponent: opponentMapping,
    };
    this.score = initialScore;
    this.roundsPlayed = [];
  }

  getShapeIndex = (Shape: string, mappingType: MappingType) => {
    const index = this.mappings[mappingType].indexOf(Shape);
    if (index === -1) {
      throw new Error(`Shape ${Shape} is not in the mapping ${mappingType}`);
    }
    return index;
  };

  getRoundOutput = (opponentShape: string, myShape: string) => {
    const opponentIndex = this.getShapeIndex(opponentShape, "opponent");
    const myIndex = this.getShapeIndex(myShape, "mine");
    if (opponentIndex === myIndex) {
      return RoundOutput.DRAW;
    }
    return myIndex > opponentIndex ? RoundOutput.VICTORY : RoundOutput.DEFEAT;
  };

  getShapeScore = (shape: string, mappingType: MappingType) => {
    return this.getShapeIndex(shape, mappingType) + 1;
  };

  getRoundOutputScore = (output: RoundOutput) => {
    if (output === RoundOutput.VICTORY) {
      return 6;
    }
    if (output === RoundOutput.DRAW) {
      return 3;
    }
    return 0;
  };

  playRound = (opponentShape: string, myShape: string) => {
    const output = this.getRoundOutput(opponentShape, myShape);
    const totalRoundScore =
      this.getRoundOutputScore(output) + this.getShapeScore(myShape, "mine");
    this.roundsPlayed.push([opponentShape, myShape]);
    this.score += totalRoundScore;
    return { output, score: totalRoundScore };
  };
}

export default RockPaperScissors;
