import { input } from "./input.js";

const banks = input.split("\n");

const digitCount = 12;
let solution = 0;
for (let i = 0; i < banks.length; i++) {
  const bank = banks[i];
  const jolts = bank.split("").map((n) => parseInt(n));

  let digits = [];
  for (let j = 0; j < digitCount; j++) digits[j] = 0;

  for (let j = 0; j < jolts.length; j++) {
    const remainingJolts = jolts.length - j;
    const startDigit = Math.max(0, digitCount - remainingJolts);

    for (let d = startDigit; d < digitCount; d++) {
      if ((digits[d] ?? 0) < jolts[j]) {
        digits[d] = jolts[j];
        for (let q = d + 1; q < digitCount; q++) {
          digits[q] = 0;
        }
        break;
      }
    }
  }

  const joltage = parseInt(digits.map((d) => d.toString()).join(""));
  solution += joltage;
}

console.log(solution);
