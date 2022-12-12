import { CrateId, Move } from "./types";

class Stacks {
  stacks: Record<CrateId, string[]>;

  constructor(stacks: Record<CrateId, string[]>) {
    this.stacks = JSON.parse(JSON.stringify(stacks)); // create deep copy;
  }

  moveCrate(move: Pick<Move, "from" | "to">) {
    const { from, to } = move;
    const movedCrateId = this.stacks[from].pop();
    if (!movedCrateId) {
      throw new Error(`Oooh no ! no crate in this stack`);
    }
    this.stacks[to].push(movedCrateId);
  }

  moveCrates9000(move: Move) {
    const { num, ...rest } = move;
    for (let i = 1; i <= num; i++) {
      this.moveCrate(rest);
    }
  }

  moveCrates9001(move: Move) {
    const { num, from, to } = move;
    const fromStackLength = this.stacks[from].length;
    if (num > fromStackLength) {
      throw new Error(
        `We can't move ${num} crates, we have only ${fromStackLength}`
      );
    }
    const movedCrateIds = this.stacks[from].splice(
      fromStackLength - num,
      fromStackLength
    );

    this.stacks[to].push(...movedCrateIds);
  }

  getTopCrateIds() {
    const orderedStackIds = Object.keys(this.stacks).sort(
      (id1, id2) => parseInt(id1) - parseInt(id2)
    );
    return orderedStackIds
      .map((id) => {
        const numCratesInStack = this.stacks[id].length;
        const topCrateId =
          numCratesInStack > 0 ? this.stacks[id][numCratesInStack - 1] : " ";
        return topCrateId;
      })
      .join("");
  }
}

export default Stacks;
