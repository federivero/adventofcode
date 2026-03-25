import { input } from "./sample.js";

const banks = input.split("\n");

let solution = 0;
for (let i = 0; i < banks.length; i++) {
  const bank = banks[i];
  const jolts = bank.split("").map((n) => parseInt(n));

  let d1 = 0;
  let d2 = 0;
  for (let j = 0; j < jolts.length - 1; j++) {
    if (jolts[j] > d1) {
      d1 = jolts[j];
      d2 = 0;
    } else if (jolts[j] > d2) {
      d2 = jolts[j];
    }
  }
  if (jolts[jolts.length - 1] > d2) {
    d2 = jolts[jolts.length - 1];
  }

  const joltage = d1 * 10 + d2;
  solution += joltage;
}

console.log(solution);
