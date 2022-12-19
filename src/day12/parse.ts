const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const parseNodeElevation = (elevation: string): number => {
  if (elevation === "S") {
    return 1; // start
  }
  if (elevation === "E") {
    return 26; // exit
  }
  const value = alphabet.indexOf(elevation);
  if (value === -1) {
    throw new Error(`Invalid elevation: ${elevation}`);
  }
  return value + 1;
};

export const buildNodeId = (x: number, y: number): string => `${x},${y}`;

export const parseInputGrid = (input: string): number[][] => {
  return input
    .split("\n")
    .map((line) => line.split("").map(parseNodeElevation));
};

export const getAdjacentNodes = (
  grid: number[][],
  i: number,
  j: number
): string[] => {
  const adjacents: string[] = [];
  const elevation = grid[i][j];
  if (i > 0 && grid[i - 1][j] <= elevation + 1) {
    adjacents.push(buildNodeId(i - 1, j));
  }
  if (grid[i + 1] && grid[i + 1][j] <= elevation + 1) {
    adjacents.push(buildNodeId(i + 1, j));
  }
  if (j > 0 && grid[i][j - 1] <= elevation + 1) {
    adjacents.push(buildNodeId(i, j - 1));
  }
  if (grid[i][j + 1] <= elevation + 1) {
    adjacents.push(buildNodeId(i, j + 1));
  }

  return adjacents;
};

export const parseStartAndExit = (
  input: string
): { start: string; exit: string } => {
  const lines = input.split("\n");
  const coords: { start?: string; exit?: string } = {};
  for (let i = 0; i < lines.length; i++) {
    const js = lines[i].indexOf("S");
    const je = lines[i].indexOf("E");
    if (js !== -1) {
      coords.start = buildNodeId(i, js);
    }
    if (je !== -1) {
      coords.exit = buildNodeId(i, je);
    }
  }

  if (!coords.start) {
    throw new Error("No start found");
  }
  if (!coords.exit) {
    throw new Error("No exit found");
  }
  return coords as { start: string; exit: string };
};
