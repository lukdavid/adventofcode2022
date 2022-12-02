import { PARSED_INPUT } from "./parsedTestInput";
import {
  sumCalories,
  getCaloriesPerElve,
  max,
  getTopThreeCalories,
} from "../elves";

it("Should sum calories for one elve", () => {
  expect(sumCalories([1000])).toBe(1000);
  expect(sumCalories([])).toBe(0);
  expect(sumCalories([1000, 2000, 3000])).toBe(6000);
});

it("Should count calories per elve", () => {
  expect(getCaloriesPerElve(PARSED_INPUT)).toEqual([
    6000, 4000, 11000, 24000, 10000,
  ]);
});

it("Should get the max of an array", () => {
  expect(max([1, 2, 3])).toBe(3);
  expect(max([1, 1])).toBe(1);
});

it("Shoud find top 3 calories", () => {
  expect(getTopThreeCalories([6000, 4000, 11000, 24000, 10000])).toEqual([
    24000, 11000, 10000,
  ]);
});
