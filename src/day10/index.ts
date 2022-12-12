import { readFileSync } from "fs";
import { computeSignal, sumSignalValues, computeImage } from "./clock";

const main = () => {
  const data = readFileSync(`${__dirname}/.data/input.txt`, "utf8")
    .toString()
    .split("\n");
  const signal = computeSignal(data);
  const signalStrengthSum = sumSignalValues(
    signal,
    [20, 60, 100, 140, 180, 220]
  );
  console.log(`Signal strength sum is ${signalStrengthSum}`);

  const image = computeImage(data);

  console.log("Resulting image : ");
  console.log(image);
};

main();
