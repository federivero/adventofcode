import { input } from "./input.js";

const ranges = input.split(",");

let invalid = 0;
for (let i = 0; i < ranges.length; i++) {
  const range = ranges[i].split("-").map((n) => parseInt(n));
  for (let n = range[0]; n <= range[1]; n++) {
    const str = n.toString();
    if (str.length % 2 === 0) {
      const firstHalf = str.slice(0, str.length / 2);
      const secondHalf = str.slice(str.length / 2);
      if (firstHalf == secondHalf) {
        invalid += n;
      }
    }
  }
}

console.log(invalid);
