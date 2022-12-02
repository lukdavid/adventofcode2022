import main from "..";
import { parseInput } from "./parse";
import RockPaperScissors from "./RockPaperScissors";

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
