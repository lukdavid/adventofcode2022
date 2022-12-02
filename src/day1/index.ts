import { parseInput } from "./parse";
import {
  getCaloriesPerElve,
  max,
  getTopThreeCalories,
  sumCalories,
} from "./elves";

const input = parseInput(`${__dirname}/.data/input.txt`);

const findMaxCalories = () => {
  const caloriesPerElve = getCaloriesPerElve(input);
  const maxCalories = max(caloriesPerElve);
  console.log(`The max amount of calories is ${maxCalories}`);
};

findMaxCalories();

const findThreeMaxCalories = () => {
  const caloriesPerElve = getCaloriesPerElve(input);
  const topThreeCalories = getTopThreeCalories(caloriesPerElve);
  console.log(
    `Top 3 calories are ${topThreeCalories}, total ${sumCalories(
      topThreeCalories
    )}`
  );
};

findThreeMaxCalories();
