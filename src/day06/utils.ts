export const areAllCaractersUnique = (s: string): boolean => {
  const uniqueChars = new Set(s.split(""));
  return uniqueChars.size === s.length;
};
