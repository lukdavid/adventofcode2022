import { Packet } from "./types";
import { comparePackets } from "./compare";

export const sortPackets = (packets: Packet[]): Packet[] =>
  packets.sort((left, right) => (comparePackets(left, right) ? -1 : 1));

export const findDividerIndexes = (
  packets: Packet[],
  dividers: Packet[]
): number[] =>
  dividers.map(
    (divider) => packets.findIndex((packet) => packet === divider) + 1
  );
