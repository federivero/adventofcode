import { input } from "./input.js";

const sections = input.split("\n\n");

const ranges = sections[0].split("\n").map((range) => {
  const rangeArray = range.split("-");
  return {
    min: parseInt(rangeArray[0]),
    max: parseInt(rangeArray[1]),
  };
});
const testIds = sections[1].split("\n").map((n) => parseInt(n));

let freshCount = 0;
for (let i = 0; i < testIds.length; i++) {
  const id = testIds[i];
  for (let j = 0; j < ranges.length; j++) {
    if (id >= ranges[j].min && id <= ranges[j].max) {
      freshCount++;
      break;
    }
  }
}
console.log(freshCount);
