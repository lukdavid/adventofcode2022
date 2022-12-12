import { MonkeyInitialProps } from "./monkey";

export const initialMonkeyTestProps: MonkeyInitialProps[] = [
  // 0
  {
    startingItems: [79, 98],
    operation: (item) => item * 19,
    divisor: 23,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 3,
  },
  {
    // 1
    startingItems: [54, 65, 75, 74],
    operation: (item) => item + 6,
    divisor: 19,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 0,
  },
  {
    // 2
    startingItems: [79, 60, 97],
    operation: (item) => item * item,
    divisor: 13,
    passToMonkeyTrue: 1,
    passToMonkeyFalse: 3,
  },
  {
    // 3
    startingItems: [74],
    operation: (item) => item + 3,
    divisor: 17,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 1,
  },
];

export const initialMonkeyProps: MonkeyInitialProps[] = [
  {
    // 0
    startingItems: [54, 61, 97, 63, 74],
    operation: (item) => item * 7,
    divisor: 17,
    passToMonkeyTrue: 5,
    passToMonkeyFalse: 3,
  },
  {
    // 1
    startingItems: [61, 70, 97, 64, 99, 83, 52, 87],
    operation: (item) => item + 8,
    divisor: 2,
    passToMonkeyTrue: 7,
    passToMonkeyFalse: 6,
  },
  {
    // 2
    startingItems: [60, 67, 80, 65],
    operation: (item) => item * 13,
    divisor: 5,
    passToMonkeyTrue: 1,
    passToMonkeyFalse: 6,
  },
  {
    // 3
    startingItems: [61, 70, 76, 69, 82, 56],
    operation: (item) => item + 7,
    divisor: 3,
    passToMonkeyTrue: 5,
    passToMonkeyFalse: 2,
  },
  {
    // 4
    startingItems: [79, 98],
    operation: (item) => item + 2,
    divisor: 7,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 3,
  },
  {
    // 5
    startingItems: [72, 79, 55],
    operation: (item) => item + 1,
    divisor: 13,
    passToMonkeyTrue: 2,
    passToMonkeyFalse: 1,
  },
  {
    // 6
    startingItems: [63],
    operation: (item) => item + 4,
    divisor: 19,
    passToMonkeyTrue: 7,
    passToMonkeyFalse: 4,
  },
  {
    //
    startingItems: [72, 51, 93, 63, 80, 86, 81],
    operation: (item) => item * item,
    divisor: 11,
    passToMonkeyTrue: 0,
    passToMonkeyFalse: 4,
  },
];
