import Rubsack from "../rubsack";

describe("Rubsack class and methods", () => {
  it("Should property initialize a rubsack", () => {
    const rubsack = new Rubsack("coco");
    expect(rubsack.content).toBe("coco");
  });

  it("Should split the contents into compartments and throw if not even length", () => {
    const rubsack1 = new Rubsack("coco");
    expect(rubsack1.compartments).toEqual(["co", "co"]);
    const rubsack2 = new Rubsack("cocorico");
    expect(rubsack2.compartments).toEqual(["coco", "rico"]);
    expect(() => new Rubsack("coc")).toThrowError();
    const rubsack3 = new Rubsack("cocoriconana", 3);
    expect(rubsack3.compartments).toEqual(["coco", "rico", "nana"]);
    expect(() => new Rubsack("coc")).toThrowError();
  });

  it("Should find common supply between 2 compartments", () => {
    const rubsack1 = new Rubsack("vJrwpWtwJgWrhcsFMMfFFhFp");
    expect(rubsack1.getCommonSupply()).toBe("p");
    const rubsack2 = new Rubsack("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL");
    expect(rubsack2.getCommonSupply()).toBe("L");
    const rubsack3 = new Rubsack("PmmdzqPrVvPwwTWBwg");
    expect(rubsack3.getCommonSupply()).toBe("P");
    const rubsack4 = new Rubsack("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn");
    expect(rubsack4.getCommonSupply()).toBe("v");
    const rubsack5 = new Rubsack("ttgJtRGJQctTZtZT");
    expect(rubsack5.getCommonSupply()).toBe("t");
    const rubsack6 = new Rubsack("CrZsJsPPZsGzwwsLwLmpwMDw");
    expect(rubsack6.getCommonSupply()).toBe("s");
    const rubsack7 = new Rubsack(
      "vJrwpWtwJgWrhcsFMMfFFhFpjqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSLPmmdzqPrVvPwwTWBwg",
      3,
      [
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ]
    );
    expect(rubsack7.getCommonSupply()).toBe("r");
    const rubsack8 = new Rubsack(
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFnttgJtRGJQctTZtZTCrZsJsPPZsGzwwsLwLmpwMDw",
      3,
      [
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ]
    );
    expect(rubsack8.getCommonSupply()).toBe("Z");
  });
  it("Should throw error if no common supply", () => {
    const rubsack = new Rubsack("aaaooo");
    expect(() => rubsack.getCommonSupply()).toThrowError();
    const rubsack2 = new Rubsack("aaaabb", 3);
    expect(() => rubsack2.getCommonSupply()).toThrowError();
  });

  it("Should calculate common supply Priority", () => {
    const rubsack1 = new Rubsack("vJrwpWtwJgWrhcsFMMfFFhFp");
    expect(rubsack1.getCommonSupplyPriority()).toBe(16);
    const rubsack2 = new Rubsack("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL");
    expect(rubsack2.getCommonSupplyPriority()).toBe(38);
    const rubsack3 = new Rubsack("PmmdzqPrVvPwwTWBwg");
    expect(rubsack3.getCommonSupplyPriority()).toBe(42);
    const rubsack4 = new Rubsack("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn");
    expect(rubsack4.getCommonSupplyPriority()).toBe(22);
    const rubsack5 = new Rubsack("ttgJtRGJQctTZtZT");
    expect(rubsack5.getCommonSupplyPriority()).toBe(20);
    const rubsack6 = new Rubsack("CrZsJsPPZsGzwwsLwLmpwMDw");
    expect(rubsack6.getCommonSupplyPriority()).toBe(19);
    const rubsack7 = new Rubsack(
      "vJrwpWtwJgWrhcsFMMfFFhFpjqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSLPmmdzqPrVvPwwTWBwg",
      3,
      [
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ]
    );
    expect(rubsack7.getCommonSupplyPriority()).toBe(18);
    const rubsack8 = new Rubsack(
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFnttgJtRGJQctTZtZTCrZsJsPPZsGzwwsLwLmpwMDw",
      3,
      [
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ]
    );
    expect(rubsack8.getCommonSupplyPriority()).toBe(52);
  });
});
