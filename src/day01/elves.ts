import { CaloriesList } from "./types";

export const sumCalories = (elve: number[]): number =>
  elve.reduce((accumulator, current) => accumulator + current, 0);

export const getCaloriesPerElve = (caloriesList: CaloriesList): number[] => {
  return caloriesList.map((elve) => sumCalories(elve));
};

export const max = (arr: number[]) => Math.max(...arr);

// export const getTopThreeCalories = (arr: number[]): number[] => {
//   if (arr.length <= 3) {
//     return arr.sort((a, b) => b - a);
//   }
//   const topThree = arr.slice(0, 3);
//   topThree.sort((a, b) => b - a);
//   for (const num of arr.slice(2)) {
//     if (num > topThree[2]) {
//       topThree[2] = num;
//       topThree.sort((a, b) => b - a);
//     }
//   }
//   return topThree;
// };

export const getTopThreeCalories = (arr: number[]): number[] =>
  arr.sort((a, b) => b - a).slice(0, 3);
