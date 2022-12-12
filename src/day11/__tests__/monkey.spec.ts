import Monkey, { MonkeyInitialProps } from "../monkey";

const initialTestMonkeyProps: MonkeyInitialProps = {
  startingItems: [79, 98],
  operation: (n: number) => n * 19,
  divisor: 3,
  passToMonkeyTrue: 2,
  passToMonkeyFalse: 3,
};

it("Should instanciate a monkey with starting items", () => {
  const monkey = new Monkey(initialTestMonkeyProps);
  expect(monkey.items).toEqual([79, 98]);
});

it("Should perform monkey's operation", () => {
  const monkey = new Monkey(initialTestMonkeyProps);
  expect(monkey.operation(1)).toBe(19);
  expect(monkey.operation(2)).toBe(38);
});

it("Should perform a monkey's test", () => {
  const monkey = new Monkey(initialTestMonkeyProps);
  expect(monkey.test(1)).toBe(false);
  expect(monkey.test(2)).toBe(false);
  expect(monkey.test(8)).toBe(false);
  expect(monkey.test(3)).toBe(true);
  expect(monkey.test(9)).toBe(true);
});

it("Should add an item", () => {
  const monkey = new Monkey(initialTestMonkeyProps);
  monkey.getItem(1);
  expect(monkey.items).toEqual([79, 98, 1]);
  monkey.getItem(2);
  expect(monkey.items).toEqual([79, 98, 1, 2]);
});

it("Should inspect an item", () => {
  const monkey = new Monkey({
    ...initialTestMonkeyProps,
    startingItems: [79, 9],
  });
  const first = monkey.inspectItem();
  expect(first.item).toBe(500);
  expect(first.passTo).toBe(3);
  expect(monkey.items).toEqual([9]);
  const second = monkey.inspectItem();
  expect(second.item).toBe(57);
  expect(second.passTo).toBe(2);
  expect(monkey.items).toEqual([]);
});

it("Should inspect an item without relief", () => {
  const monkey = new Monkey({
    ...initialTestMonkeyProps,
    startingItems: [79, 9],
    relief: false,
  });
  const first = monkey.inspectItem();
  expect(first.item).toBe(1501);
  expect(first.passTo).toBe(3);
  expect(monkey.items).toEqual([9]);
  const second = monkey.inspectItem();
  expect(second.item).toBe(171);
  expect(second.passTo).toBe(2);
  expect(monkey.items).toEqual([]);
});

it("Should increment the counter of inspected items", () => {
  const monkey = new Monkey(initialTestMonkeyProps);
  expect(monkey.inspectedItemsCount).toBe(0);
  monkey.inspectItem();
  expect(monkey.inspectedItemsCount).toBe(1);
  monkey.inspectItem();
  expect(monkey.inspectedItemsCount).toBe(2);
});
