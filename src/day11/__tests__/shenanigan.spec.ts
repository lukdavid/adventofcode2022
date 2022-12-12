import Shenanigan from "../shenanigan";
import Monkey from "../monkey";
import { initialMonkeyTestProps } from "../data";

describe("Shenanigan", () => {
  it("Should instanciate shenanigan with a list of monkeys", () => {
    const monkeys = initialMonkeyTestProps.map((props) => new Monkey(props));
    const shenanigan = new Shenanigan(monkeys);
    expect(shenanigan.monkeys).toEqual(monkeys);
    expect(shenanigan.roundsPlayed).toBe(0);
  });

  it("Should compute the common divisor", () => {
    const monkeys = initialMonkeyTestProps.map((props) => new Monkey(props));
    const shenanigan = new Shenanigan(monkeys);
    expect(shenanigan.commonDivisor).toBe(23 * 19 * 13 * 17);
  });

  it("Should play a monkey's turn", () => {
    const monkeys = initialMonkeyTestProps.map((props) => new Monkey(props));
    const shenanigan = new Shenanigan(monkeys);
    shenanigan.playMonkeysTurn(0);
    expect(shenanigan.monkeys[0].items).toEqual([]);
    expect(shenanigan.monkeys[3].items).toEqual([74, 500, 620]);
  });

  it("Should play a full round", () => {
    const monkeys = initialMonkeyTestProps.map((props) => new Monkey(props));
    const shenanigan = new Shenanigan(monkeys);
    // round 1
    shenanigan.playRound();
    expect(shenanigan.monkeys[0].items).toEqual([20, 23, 27, 26]);
    expect(shenanigan.monkeys[1].items).toEqual([
      2080, 25, 167, 207, 401, 1046,
    ]);
    expect(shenanigan.monkeys[2].items).toEqual([]);
    expect(shenanigan.monkeys[3].items).toEqual([]);
    expect(shenanigan.roundsPlayed).toBe(1);
    // round 2
    shenanigan.playRound();
    expect(shenanigan.monkeys[0].items).toEqual([695, 10, 71, 135, 350]);
    expect(shenanigan.monkeys[1].items).toEqual([43, 49, 58, 55, 362]);
    expect(shenanigan.monkeys[2].items).toEqual([]);
    expect(shenanigan.monkeys[3].items).toEqual([]);
    expect(shenanigan.roundsPlayed).toBe(2);
  });

  it("Should get most active monkeys", () => {
    const inspectedItemsCounts = [50, 2, 80, 9];
    const monkeys = initialMonkeyTestProps.map(
      (props, index) =>
        new Monkey({
          ...props,
          initialInspectedItemsCount: inspectedItemsCounts[index],
        })
    );
    const shenanigan = new Shenanigan(monkeys);
    expect(shenanigan.getMostActiveMonkeys()).toEqual([
      { index: 2, activity: 80 },
      { index: 0, activity: 50 },
      { index: 3, activity: 9 },
      { index: 1, activity: 2 },
    ]);
  });

  it("Should have correct activity after 20 rounds of test input", () => {
    const monkeys = initialMonkeyTestProps.map((props) => new Monkey(props));
    const shenanigan = new Shenanigan(monkeys);
    for (let i = 0; i < 20; i++) {
      shenanigan.playRound();
    }
    expect(shenanigan.roundsPlayed).toBe(20);
    expect(shenanigan.monkeys[0].items).toEqual([10, 12, 14, 26, 34]);
    expect(shenanigan.monkeys[1].items).toEqual([245, 93, 53, 199, 115]);
    expect(shenanigan.monkeys[2].items).toEqual([]);
    expect(shenanigan.monkeys[3].items).toEqual([]);
    expect(shenanigan.getMostActiveMonkeys()).toEqual([
      { index: 3, activity: 105 },
      { index: 0, activity: 101 },
      { index: 1, activity: 95 },
      { index: 2, activity: 7 },
    ]);
  });

  it("Should use common divisor to avoid going beyond safeint", () => {
    const monkeys = initialMonkeyTestProps.map(
      (props) => new Monkey({ ...props, relief: false })
    );
    const shenanigan = new Shenanigan(monkeys);
    expect(() => {
      for (let i = 0; i < 20; i++) {
        shenanigan.printMonkeys();
        shenanigan.playRound();
      }
    }).not.toThrowError();
  });

  it("Should have correct activity after 10000 rounds of test input with no relief", () => {
    const monkeys = initialMonkeyTestProps.map(
      (props) => new Monkey({ ...props, relief: false })
    );
    const shenanigan = new Shenanigan(monkeys);
    for (let i = 0; i < 10000; i++) {
      shenanigan.printMonkeys();
      shenanigan.playRound();
      if (i === 0 || i === 19 || i === 9999) {
        console.log(`Round ${i + 1}`);
        console.table(shenanigan.getMostActiveMonkeys());
      }
    }
    expect(shenanigan.roundsPlayed).toBe(10000);
    expect(shenanigan.getMostActiveMonkeys()).toEqual([
      { index: 0, activity: 52166 },
      { index: 3, activity: 52013 },
      { index: 1, activity: 47830 },
      { index: 2, activity: 1938 },
    ]);
  });
});
