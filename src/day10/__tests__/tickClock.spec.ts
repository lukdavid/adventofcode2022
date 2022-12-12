import { computeSignal, sumSignalValues, computeImage } from "../clock";
import { readFileSync } from "fs";

const data = readFileSync(`${__dirname}/testInput.txt`, "utf8")
  .toString()
  .split("\n");

describe("clock", () => {
  it("Should compute the right history", () => {
    const signalStrength = computeSignal(data);
    expect(signalStrength[19]).toBe(420);
    expect(signalStrength[59]).toBe(1140);
    expect(signalStrength[99]).toBe(1800);
    expect(signalStrength[139]).toBe(2940);
    expect(signalStrength[219]).toBe(3960);
  });

  it("Should compute strength sum of wanted cycles", () => {
    const signalStrength = computeSignal(data);
    expect(sumSignalValues(signalStrength, [20, 60, 100, 140, 180, 220])).toBe(
      13140
    );
  });

  it("Should compute the right image", () => {
    expect(computeImage(data)).toBe(
      `##..##..##..##..##..##..##..##..##..##..\n###...###...###...###...###...###...###.\n####....####....####....####....####....\n#####.....#####.....#####.....#####.....\n######......######......######......####\n#######.......#######.......#######.....`
    );
  });
});
