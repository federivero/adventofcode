import { input } from "./input.js";

const lines = input.split("\n");
const matrix = lines.map((line) => line.split(""));

const start = lines[0].split("").findIndex((t) => t === "S");

let results = [];

// dynamic programming
function storeResult(row, column, result) {
  if (!results[row]) {
    results[row] = [];
  }
  results[row][column] = result;
}

function calculateRays(row, column) {
  if (row >= lines.length) return 1;

  if (results[row]?.[column]) {
    return results[row]?.[column];
  }

  if (matrix[row][column] === "^") {
    let leftResult = calculateRays(row + 1, column - 1);
    storeResult(row + 1, column - 1, leftResult);
    let rightResult = calculateRays(row + 1, column + 1);
    storeResult(row + 1, column + 1, rightResult);
    return leftResult + rightResult;
  } else {
    let result = calculateRays(row + 1, column);
    storeResult(row + 1, column, result);
    return result;
  }
}

let splitCount = calculateRays(0, start);

console.log(splitCount);
