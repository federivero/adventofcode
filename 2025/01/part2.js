import { input } from "./input.js";

const lines = input.split("\n");

let pw = 0;
let dial = 50;
for (let i = 0; i < lines.length; i++) {
  const com = lines[i];
  const dir = com[0];
  const count = parseInt(com.slice(1));
  const dialAtZero = dial === 0;
  if (dir === "R") {
    dial += count;
  } else if (dir === "L") {
    dial -= count;
  }
  if (dial === 0) {
    pw++;
  } else if (dial >= 100) {
    while (dial >= 100) {
      dial -= 100;
      pw++;
    }
  } else if (dial < 0) {
    if (dialAtZero) {
      pw--;
    }
    while (dial < 0) {
      dial += 100;
      pw++;
    }
    if (dial === 0) {
      pw++;
    }
  }
}

console.log(pw);
