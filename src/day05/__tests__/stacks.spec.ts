import Stacks from "../stacks";

const TEST_STACKS = { "1": ["Z", "N"], "2": ["M", "C", "D"], "3": ["P"] };

describe("Stack class methods", () => {
  it("Shoud move one crate from a stack to another", () => {
    const stacks = new Stacks(TEST_STACKS);
    stacks.moveCrate({ from: "2", to: "1" });
    expect(stacks.stacks).toEqual({
      "1": ["Z", "N", "D"],
      "2": ["M", "C"],
      "3": ["P"],
    });
  });
  it("Shoud throw error when trying to move crate from empty stack", () => {
    const stacks = new Stacks({ ...TEST_STACKS, "4": [] });
    expect(() => stacks.moveCrate({ from: "4", to: "1" })).toThrowError();
  });
  it("Shoud move several crate from a stack to another using CrateMover9000 (1 by 1, reversed order)", () => {
    const stacks = new Stacks(TEST_STACKS);
    stacks.moveCrates9000({ num: 2, from: "2", to: "1" });
    expect(stacks.stacks).toEqual({
      "1": ["Z", "N", "D", "C"],
      "2": ["M"],
      "3": ["P"],
    });
  });
  it("Shoud move several crate from a stack to another using CrateMover9001 (several at a time, same order)", () => {
    const stacks = new Stacks(TEST_STACKS);
    stacks.moveCrates9001({ num: 2, from: "2", to: "1" });
    expect(stacks.stacks).toEqual({
      "1": ["Z", "N", "C", "D"],
      "2": ["M"],
      "3": ["P"],
    });
  });
  it("Should print top crates ids", () => {
    const stacks = new Stacks(TEST_STACKS);
    expect(stacks.getTopCrateIds()).toBe("NDP");
  });
});
