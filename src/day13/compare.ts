import { Packet } from "./types";

export const comparePackets = (
  left: Packet,
  right: Packet
): boolean | undefined => {
  //   console.log(left, right);
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    // both integers
    if (typeof left[i] === "number" && typeof right[i] === "number") {
      if (left[i] < right[i]) {
        return true;
      } else if (left[i] > right[i]) {
        return false;
      }
    }
    // integer and undefined
    else if (
      typeof left[i] === "undefined" &&
      typeof right[i] !== "undefined"
    ) {
      return true;
    } else if (
      typeof left[i] !== "undefined" &&
      typeof right[i] === "undefined"
    ) {
      return false;
    }
    // both arrays
    else if (Array.isArray(left[i]) && Array.isArray(right[i])) {
      const subComparison = comparePackets(
        left[i] as Packet,
        right[i] as Packet
      );
      if (subComparison !== undefined) {
        return subComparison;
      }
    }
    // mixed array and integer
    else if (Array.isArray(left[i]) && typeof right[i] === "number") {
      const subComparison = comparePackets(left[i] as Packet, [right[i]]);
      if (subComparison !== undefined) {
        return subComparison;
      }
    } else if (typeof left[i] === "number" && Array.isArray(right[i])) {
      const subComparison = comparePackets([left[i]], right[i] as Packet);
      if (subComparison !== undefined) {
        return subComparison;
      }
    }
  }
  return undefined;
};
