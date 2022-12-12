import { parseInput } from "./parse";
import RockPaperScissors from "./RockPaperScissors";
import { RoundOutput } from "./types";

const OPPONENT_MAPPING = ["A", "B", "C"];
const MY_MAPPING = ["X", "Y", "Z"];

const main1 = () => {
  const roundList = parseInput(`${__dirname}/.data/input.txt`);
  const rockPaperScissors = new RockPaperScissors(OPPONENT_MAPPING, MY_MAPPING);
  roundList.forEach(([opponentShape, myShape]) => {
    rockPaperScissors.playRound(opponentShape, myShape);
  });
  console.log(
    `Played ${rockPaperScissors.roundsPlayed.length} rounds and total score is ${rockPaperScissors.score}`
  );
};

main1();

const outputEncoding: Record<string, RoundOutput> = {
  X: RoundOutput.DEFEAT,
  Y: RoundOutput.DRAW,
  Z: RoundOutput.VICTORY,
};

const main2 = () => {
  const roundList = parseInput(`${__dirname}/.data/input.txt`);
  const rockPaperScissors = new RockPaperScissors(OPPONENT_MAPPING, MY_MAPPING);
  roundList.forEach(([opponentShape, wantedOutputEncoded]) => {
    const wantedOutput = outputEncoding[wantedOutputEncoded];
    const shapeToPlay = rockPaperScissors.getShapeForOutput(
      opponentShape,
      wantedOutput
    );
    rockPaperScissors.playRound(opponentShape, shapeToPlay);
  });
  console.log(
    `Played ${rockPaperScissors.roundsPlayed.length} rounds and total score is ${rockPaperScissors.score}`
  );
};

main2();
