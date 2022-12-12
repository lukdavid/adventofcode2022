import Monkey from "./monkey";

class Shenanigan {
  monkeys: Monkey[];
  roundsPlayed: number;
  commonDivisor: number; // used to avoid un-manageably high numbers

  constructor(monkeys: Monkey[]) {
    this.monkeys = monkeys;
    this.roundsPlayed = 0;
    this.commonDivisor = monkeys.reduce(
      (product, monkey) => product * monkey.divisor,
      1
    );
  }

  playMonkeysTurn(monkeyIndex: number) {
    const monkey = this.monkeys[monkeyIndex];
    if (!monkey) {
      throw new Error(`No monkey at index ${monkeyIndex}!`);
    }
    while (monkey.items.length > 0) {
      const { item, passTo } = monkey.inspectItem();
      this.monkeys[passTo].getItem(item % this.commonDivisor);
    }
  }

  playRound() {
    for (let index = 0; index < this.monkeys.length; index++) {
      this.playMonkeysTurn(index);
    }
    this.roundsPlayed += 1;
  }

  getMostActiveMonkeys() {
    const activities = this.monkeys.map((monkey, index) => ({
      index,
      activity: monkey.inspectedItemsCount,
    }));
    return activities.sort((a, b) => b.activity - a.activity);
  }

  printMonkeys() {
    const s = this.monkeys
      .map((monkey, index) => `[M${index}] ${monkey.items.join(", ")}`)
      .join(" | ");
    console.log(`Round ${this.roundsPlayed} >> ` + s);
  }
}

export default Shenanigan;
