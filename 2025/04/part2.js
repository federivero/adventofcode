import { input } from "./input.js";

const lines = input.split("\n");

let matrix = lines.map((line) => line.split(""));

const h = matrix.length;
const w = matrix[0]?.length;

const adjacentPaperLimit = 4;
let totalRemovedRolls = 0;

function removeRolls() {
  let removedRolls = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const target = matrix[i][j];

      if (target === "@") {
        let paperCount = 0;
        loopPaper: for (let row = Math.max(i - 1, 0); row <= Math.min(i + 1, h - 1); row++) {
          for (let col = Math.max(j - 1, 0); col <= Math.min(j + 1, w - 1); col++) {
            if (!(row === i && col === j)) {
              if (matrix[row][col] === "@") {
                paperCount++;
                if (paperCount >= adjacentPaperLimit) {
                  break loopPaper;
                }
              }
            }
          }
        }
        if (paperCount < adjacentPaperLimit) {
          removedRolls.push({ row: i, col: j });
          totalRemovedRolls++;
        }
      }
    }
  }

  for (let i = 0; i < removedRolls.length; i++) {
    matrix[removedRolls[i].row][removedRolls[i].col] = ".";
  }

  return matrix;
}

let prevTotalRemovedRolls = -1;
while (prevTotalRemovedRolls != totalRemovedRolls) {
  prevTotalRemovedRolls = totalRemovedRolls;
  matrix = removeRolls(matrix);
}

console.log(totalRemovedRolls);
