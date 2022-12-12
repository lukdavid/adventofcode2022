import Packet from "./packet";
import { readFileSync } from "fs";

const main1 = () => {
  //parse input
  const input = readFileSync(`${__dirname}/.data/input.txt`).toString().trim();
  const packet = new Packet(input);
  console.log(`Input length is ${input.length}`);
  console.log(
    `The first marker of 4 caracters ends at position ${packet.getMarkerPosition()}`
  );
};

main1();

const main2 = () => {
  //parse input
  const input = readFileSync(`${__dirname}/.data/input.txt`).toString().trim();
  const packet = new Packet(input, 14);
  console.log(
    `The first marker of 14 caracters ends at position ${packet.getMarkerPosition()}`
  );
};

main2();
