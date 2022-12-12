export interface MonkeyInitialProps {
  startingItems: number[];
  operation(item: number): number;
  test: (item: number) => boolean;
  passToMonkeyTrue: number;
  passToMonkeyFalse: number;
}

class Monkey {
  items: number[];
  operation: (item: number) => number;
  test: (item: number) => boolean;
  passToMonkeyTrue: number;
  passToMonkeyFalse: number;
  inspectedItemsCount: number;

  constructor(props: MonkeyInitialProps) {
    this.items = props.startingItems;
    this.operation = props.operation;
    this.test = props.test;
    this.passToMonkeyTrue = props.passToMonkeyTrue;
    this.passToMonkeyFalse = props.passToMonkeyFalse;
    this.inspectedItemsCount = 0;
  }

  getItem(item: number) {
    this.items.push(item);
  }

  inspectItem() {
    const item = this.items.shift();
    if (typeof item !== "number") {
      throw new Error("No item to inspect");
    }
    const newItem = Math.floor(this.operation(item) / 3);
    this.inspectedItemsCount += 1;
    return {
      item: newItem,
      passTo: this.test(newItem)
        ? this.passToMonkeyTrue
        : this.passToMonkeyFalse,
    };
  }
}

export default Monkey;
