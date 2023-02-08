export const diffSet = (
  set1: Set<number>,
  set2: Set<number>,
  min: number,
  max: number
): Set<number> => {
  const result = new Set<number>();
  for (const value of set1) {
    if (!set2.has(value)) {
      if (value >= min && value <= max) {
        result.add(value);
      }
    }
  }
  return result;
};
