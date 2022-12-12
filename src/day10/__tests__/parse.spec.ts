import { parseAddx } from "../parse";

describe("Parse", () => {
  it("Should parse an addx line", () => {
    expect(parseAddx("addx 2")).toBe(2);
    expect(parseAddx("addx -11")).toBe(-11);
    expect(parseAddx("addx 4 ")).toBe(4);
  });
});
