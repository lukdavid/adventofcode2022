import { areAllCaractersUnique } from "./utils";

class Packet {
  content: string;
  markerLength: number;

  constructor(content: string, markerLength = 4) {
    this.content = content;
    this.markerLength = markerLength;
  }

  /**
   * Returns the index of the end of the first sequence of 4 different caracters
   */
  getMarkerPosition() {
    for (let i = 0; i < this.content.length - this.markerLength; i++) {
      const window = this.content.slice(i, i + this.markerLength);
      if (areAllCaractersUnique(window)) {
        return i + this.markerLength;
      }
    }
    return -1;
  }
}

export default Packet;
