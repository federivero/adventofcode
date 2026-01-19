import { input } from "./input.js";

const lines = input.split("\n");

let pw = 0;
let dial = 50;
for (let i = 0; i < lines.length; i++) {
  const com = lines[i];
  const dir = com[0];
  const count = parseInt(com.slice(1));
  if (dir === "R") {
    dial += count;
  } else if (dir === "L") {
    dial -= count;
  }
  dial = dial % 100;
  if (dial === 0) {
    pw++;
  }
}

console.log(pw);
