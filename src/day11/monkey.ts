export interface MonkeyInitialProps {
  startingItems: number[];
  operation(item: number): number;
  divisor: number;
  passToMonkeyTrue: number;
  passToMonkeyFalse: number;
  initialInspectedItemsCount?: number; // can be overridden for tests
  relief?: boolean; // whether divide by 3 after inspecting
}

class Monkey {
  items: number[];
  operation: (item: number) => number;
  divisor: number;
  passToMonkeyTrue: number;
  passToMonkeyFalse: number;
  inspectedItemsCount: number;
  relief: boolean;

  constructor(props: MonkeyInitialProps) {
    this.items = [...props.startingItems];
    this.operation = props.operation;
    this.divisor = props.divisor;
    this.passToMonkeyTrue = props.passToMonkeyTrue;
    this.passToMonkeyFalse = props.passToMonkeyFalse;
    this.inspectedItemsCount = props.initialInspectedItemsCount || 0;
    this.relief = props.relief !== undefined ? props.relief : true;
  }

  getItem(item: number) {
    this.items.push(item);
  }

  test(item: number): boolean {
    return item % this.divisor === 0;
  }

  inspectItem() {
    const item = this.items.shift();
    if (typeof item !== "number") {
      throw new Error("No item to inspect");
    }
    const newItem = this.relief
      ? Math.floor(this.operation(item) / 3)
      : this.operation(item);
    this.inspectedItemsCount += 1;
    if (newItem > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `Reached max safe integer: ${newItem} > ${Number.MAX_SAFE_INTEGER}`
      );
    }
    return {
      item: newItem,
      passTo: this.test(newItem)
        ? this.passToMonkeyTrue
        : this.passToMonkeyFalse,
    };
  }
}

export default Monkey;
