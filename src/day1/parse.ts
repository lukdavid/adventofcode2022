import { readFileSync } from "fs";
import { CaloriesList } from "./types";

export const parseInput = (filePath: string): CaloriesList => {
  const rawText = readFileSync(filePath).toString();
  const elvesSupply = rawText.split(/\n{2,}/g);
  return elvesSupply.map((elveSupply) =>
    elveSupply.split(/\n+/g).map((calories) => parseInt(calories))
  );
};
