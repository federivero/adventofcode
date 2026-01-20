import { input } from "./input.js";

const lines = input.split("\n");
const matrix = lines.map((line) => line.split(""));

const start = lines[0].split("").findIndex((t) => t === "S");

let rayRow = lines[0].split("").map((t, index) => index === start);

let splitCount = 0;
for (let step = 0; step < matrix.length; step++) {
  let splittersRow = matrix[step];

  let newRayRow = rayRow.slice();
  for (let c = 0; c < rayRow.length; c++) {
    if (rayRow[c]) {
      if (splittersRow[c] === "^") {
        newRayRow[c] = false;
        newRayRow[c - 1] = true;
        newRayRow[c + 1] = true;
        splitCount++;
      } else {
        newRayRow[c] = true;
      }
    }
  }

  rayRow = newRayRow;
}

console.log(splitCount);
