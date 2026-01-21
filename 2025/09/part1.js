import { input } from "./input.js";

const coords = input
  .split("\n")
  .map((line) => line.split(",").map((n) => parseInt(n)))
  .map((line) => {
    return {
      x: line[0],
      y: line[1],
    };
  });

let max = 0;
for (let i = 0; i < coords.length; i++) {
  for (let j = i + 1; j < coords.length; j++) {
    const p1 = coords[i];
    const p2 = coords[j];
    const w = Math.abs(p1.x - p2.x) + 1;
    const h = Math.abs(p1.y - p2.y) + 1;

    max = Math.max(w * h, max);
  }
}
console.log(max);
