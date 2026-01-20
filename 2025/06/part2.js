import { input } from "./input.js";

const lines = input.split("\n");

const symbolsRaw = lines[lines.length - 1];

const columnLengths = [];
let inSymbol = false;
let length = 0;
for (let i = 0; i < symbolsRaw.length; i++) {
  if (symbolsRaw[i] === "*" || symbolsRaw[i] === "+") {
    if (!inSymbol) {
      inSymbol = true;
    } else {
      length--;
      columnLengths.push(length);
    }
    length = 1;
  } else {
    length++;
  }
}
columnLengths.push(length);

const numberLines = lines.slice(0, lines.length - 1).map((line) => line.split(""));

const symbols = lines[lines.length - 1].split(" ").filter((n) => !!n);

let columnNumbers = [];
let rowIndex = 0;
for (let i = 0; i < symbols.length; i++) {
  let column = [];

  for (let j = 0; j < columnLengths[i]; j++) {
    let startedNumber = false;
    let number = 0;
    for (let q = 0; q < numberLines.length; q++) {
      const digit = numberLines[q][rowIndex + j];
      if (digit !== " ") {
        if (startedNumber) {
          number *= 10;
          number += parseInt(digit);
        } else {
          startedNumber = true;
          number = parseInt(digit);
        }
      }
    }
    column.push(number);
  }
  rowIndex += columnLengths[i];
  rowIndex++;

  columnNumbers.push(column);
}

let results = [];
for (let i = 0; i < symbols.length; i++) {
  const symbol = symbols[i];
  let column = columnNumbers[i];
  let base = column[0];
  for (let j = 1; j < column.length; j++) {
    if (symbol === "*") {
      base *= column[j];
    } else if (symbol === "+") {
      base += column[j];
    } else throw Error(`unexpected symbol ${symbol} found`);
  }
  results.push(base);
}

const total = results.reduce((total, current) => total + current, 0);
console.log(total);
