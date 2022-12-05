export type CrateId = string;

export interface Move {
  num: number;
  from: CrateId;
  to: CrateId;
}
