import { MonkeyInitialProps } from "./monkey";

export const initialTestProps: MonkeyInitialProps[] = [
  // 0
  {
    startingItems: [79, 98],
    operation: (item) => item * 19,
    test: (item) => item % 23 === 0,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 3,
  },
  {
    // 1
    startingItems: [54, 65, 75, 74],
    operation: (item) => item + 6,
    test: (item) => item % 19 === 0,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 0,
  },
  {
    // 2
    startingItems: [79, 60, 97],
    operation: (item) => item * item,
    test: (item) => item % 13 === 0,
    passToMonkeyTrue: 1,
    passToMonkeyFalse: 3,
  },
  {
    // 3
    startingItems: [74],
    operation: (item) => item + 3,
    test: (item) => item % 17 === 0,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 1,
  },
];

export const initialMonkeyProps: MonkeyInitialProps[] = [
  {
    // 0
    startingItems: [54, 61, 97, 63, 74],
    operation: (item) => item * 7,
    test: (item) => item % 17 === 0,
    passToMonkeyTrue: 5,
    passToMonkeyFalse: 3,
  },
  {
    // 1
    startingItems: [61, 70, 97, 64, 99, 83, 52, 87],
    operation: (item) => item + 8,
    test: (item) => item % 2 === 0,
    passToMonkeyTrue: 7,
    passToMonkeyFalse: 6,
  },
  {
    // 2
    startingItems: [60, 67, 80, 65],
    operation: (item) => item * 13,
    test: (item) => item % 5 === 0,
    passToMonkeyTrue: 1,
    passToMonkeyFalse: 6,
  },
  {
    // 3
    startingItems: [61, 70, 76, 69, 82, 56],
    operation: (item) => item + 7,
    test: (item) => item % 3 === 0,
    passToMonkeyTrue: 5,
    passToMonkeyFalse: 2,
  },
  {
    // 4
    startingItems: [79, 98],
    operation: (item) => item + 2,
    test: (item) => item % 7 === 0,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 3,
  },
  {
    // 5
    startingItems: [72, 79, 55],
    operation: (item) => item + 1,
    test: (item) => item % 13 === 0,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 1,
  },
  {
    // 6
    startingItems: [63],
    operation: (item) => item + 4,
    test: (item) => item % 19 === 0,
    passToMonkeyTrue: 7,
    passToMonkeyFalse: 4,
  },
  {
    //
    startingItems: [72, 51, 93, 63, 80, 86, 81],
    operation: (item) => item * item,
    test: (item) => item % 11 === 0,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 4,
  },
];
