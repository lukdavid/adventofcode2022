import Shenanigan from "./shenanigan";
import Monkey from "./monkey";
import { initialMonkeyProps } from "./data";

const main = () => {
  const monkeys = initialMonkeyProps.map(
    (props) => new Monkey({ ...props, relief: false })
  );
  const shenanigan = new Shenanigan(monkeys);
  for (let i = 0; i < 10000; i++) {
    shenanigan.playRound();
    if (i % 500 === 0) {
      console.log(`Round ${i + 1}`);
    }
  }
  const mostActiveMonkeys = shenanigan.getMostActiveMonkeys();
  console.table(mostActiveMonkeys);
  console.log(
    `Monkey business : ${
      mostActiveMonkeys[0].activity * mostActiveMonkeys[1].activity
    }`
  );
};

main();
