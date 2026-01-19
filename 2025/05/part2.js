import { input } from "./input.js";

const sections = input.split("\n\n");

const ranges = sections[0].split("\n").map((range) => {
  const rangeArray = range.split("-");
  return {
    min: parseInt(rangeArray[0]),
    max: parseInt(rangeArray[1]),
  };
});

ranges.sort((r1, r2) => r1.min - r2.min);

function overlap(range1, range2) {
  return (
    (range1.min >= range2.min && range1.min <= range2.max) ||
    (range1.max >= range2.min && range1.max <= range2.max) ||
    (range2.min >= range1.min && range2.min <= range1.max) ||
    (range2.max >= range1.min && range2.max <= range1.max)
  );
}

function merge(range1, range2) {
  return { min: Math.min(range1.min, range2.min), max: Math.max(range1.max, range2.max) };
}

let newRanges = [];
for (let i = 0; i < ranges.length; i++) {
  let range = ranges[i];

  let hadOverlap = false;
  for (let j = 0; j < newRanges.length; j++) {
    if (overlap(newRanges[j], range)) {
      newRanges[j] = merge(newRanges[j], range);
      hadOverlap = true;
      break;
    }
  }
  if (!hadOverlap) {
    newRanges.push(range);
  }
}

let count = 0;
for (let i = 0; i < newRanges.length; i++) {
  count += newRanges[i].max - newRanges[i].min + 1;
}
console.log(count);
