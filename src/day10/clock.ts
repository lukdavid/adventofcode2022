import { parseAddx } from "./parse";

export const computeSignal = (values: string[]): number[] => {
  let x = 1;
  let cycleNum = 0;
  const signalStrength = [];
  for (let i = 1; i <= values.length; i++) {
    const value = values[i - 1];

    cycleNum += 1;
    signalStrength.push(x * cycleNum);

    if (value !== "noop") {
      cycleNum += 1;
      signalStrength.push(x * cycleNum);
      x += parseAddx(value);
    }
  }
  //   console.table(signalStrength);
  return signalStrength;
};

export const sumSignalValues = (
  signalStrength: number[],
  cycleNums: number[]
): number => {
  let sum = 0;
  for (const cycleNum of cycleNums) {
    sum += signalStrength[cycleNum - 1];
  }
  return sum;
};

const computeXPositions = (values: string[]): number[] => {
  let x = 1;
  const xPositions = [];
  for (let i = 1; i <= values.length; i++) {
    const value = values[i - 1];
    xPositions.push(x);
    if (value !== "noop") {
      xPositions.push(x);
      x += parseAddx(value);
    }
  }
  return xPositions;
};

export const computeImage = (values: string[], imageWidth = 40): string => {
  const xPositions = computeXPositions(values);
  // split into lines with length imageWidth
  const lines: number[][] = [];
  while (xPositions.length > 0) {
    lines.push(xPositions.splice(0, imageWidth));
  }
  //
  return lines
    .map((line) =>
      line.reduce((acc, x, index) => {
        if (x >= index - 1 && x <= index + 1) {
          return acc + "#";
        }
        return acc + ".";
      }, "")
    )
    .join("\n");
};
