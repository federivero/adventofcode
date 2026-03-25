import { input } from "./input.js";

const lines = input.split("\n");
const numberLines = lines.slice(0, lines.length - 1).map((line) =>
  line
    .split(" ")
    .filter((n) => !!n)
    .map((n) => parseInt(n)),
);

const symbols = lines[lines.length - 1].split(" ").filter((n) => !!n);

let results = [];

for (let i = 0; i < symbols.length; i++) {
  let symbol = symbols[i];
  let base = numberLines[0][i];
  for (let j = 1; j < numberLines.length; j++) {
    if (symbol === "*") {
      base *= numberLines[j][i];
    } else if (symbol === "+") {
      base += numberLines[j][i];
    } else throw Error(`unexpected symbol ${symbol} found`);
  }
  results.push(base);
}

const total = results.reduce((total, current) => total + current, 0);
console.log(total);
