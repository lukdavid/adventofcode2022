import Packet from "../packet";

const TEST_INPUTS = [
  {
    content: "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
    markerPos: 7,
    messageMarkerPos: 19,
  },
  {
    content: "bvwbjplbgvbhsrlpgdmjqwftvncz",
    markerPos: 5,
    messageMarkerPos: 23,
  },
  {
    content: "nppdvjthqldpwncqszvftbrmjlhg",
    markerPos: 6,
    messageMarkerPos: 23,
  },
  {
    content: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
    markerPos: 10,
    messageMarkerPos: 29,
  },
  {
    content: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
    markerPos: 11,
    messageMarkerPos: 26,
  },
];

describe("Packet class and methods", () => {
  it("Should instanciate a packet", () => {
    for (const testInput of TEST_INPUTS) {
      const packet = new Packet(testInput.content);
      expect(packet.content).toBe(testInput.content);
    }
  });

  it("Should find first marker position", () => {
    for (const testInput of TEST_INPUTS) {
      const packet = new Packet(testInput.content);
      expect(packet.getMarkerPosition()).toBe(testInput.markerPos);
    }
  });

  it("Should find first message marker position position", () => {
    for (const testInput of TEST_INPUTS) {
      const packet = new Packet(testInput.content, 14);
      expect(packet.getMarkerPosition()).toBe(testInput.messageMarkerPos);
    }
  });
});
