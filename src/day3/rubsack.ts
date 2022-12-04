import { alphabet } from "./alphabet";

class Rubsack {
  content: string;
  compartments: string[];

  constructor(content: string, numCompartments = 2, compartments?: string[]) {
    this.content = content;
    if (compartments) {
      this.compartments = compartments;
    } else {
      if (content.length % numCompartments !== 0) {
        throw new Error(
          `Content should be divisible by ${numCompartments} and is ${content.length}`
        );
      }
      const compartmentsLength = content.length / numCompartments;
      this.compartments = [];
      for (let i = 0; i < numCompartments; i++) {
        this.compartments.push(
          content.slice(i * compartmentsLength, (i + 1) * compartmentsLength)
        );
      }
    }
  }

  getCommonSupply(): string {
    const [first, ...rest] = this.compartments;
    for (const supply of first) {
      let isCommon = true;
      for (const compartment of rest) {
        if (!compartment.includes(supply)) {
          isCommon = false;
          break;
        }
      }
      if (isCommon) {
        return supply;
      }
    }

    throw new Error("Didnt find common supply");
  }

  getCommonSupplyPriority() {
    const commonSupply = this.getCommonSupply();
    const commonSupplyLowerCase = commonSupply.toLowerCase();
    const isUpperCase = commonSupplyLowerCase !== commonSupply;
    return alphabet.indexOf(commonSupplyLowerCase) + (isUpperCase ? 27 : 1);
  }
}

export default Rubsack;
