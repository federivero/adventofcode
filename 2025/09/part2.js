import { input } from "./input.js";

const coords = input
  .split("\n")
  .map((line) => line.split(",").map((n) => parseInt(n)))
  .map((line) => {
    return {
      x: line[0],
      y: line[1],
    };
  });

/*
coords.push(coords[0]);
let edges = [];
for (let i = 1; i < coords.length; i++) {
  const p1 = coords[i - 1];
  const p2 = coords[i];
  edges.push({
    x1: Math.min(p1.x, p2.x),
    y1: Math.min(p1.y, p2.y),
    x2: Math.max(p1.x, p2.x),
    y2: Math.max(p1.y, p2.y),
    p1,
    p2,
    vertical: p1.x === p2.x,
    horizontal: p1.y === p2.y,
  });
}
coords.pop();

let rects = [];
// step 1: create rects
for (let i = 0; i < coords.length; i++) {
  const p1 = coords[i];

  for (let j = i + 1; j < coords.length; j++) {
    const p2 = coords[j];
    const w = Math.abs(p1.x - p2.x) + 1;
    const h = Math.abs(p1.y - p2.y) + 1;

    rects.push({
      x1: Math.min(p1.x, p2.x),
      y1: Math.min(p1.y, p2.y),
      x2: Math.max(p1.x, p2.x),
      y2: Math.max(p1.y, p2.y),
      w,
      h,
      area: w * h,
    });
  }
}

// step 2: sort by area
rects.sort((r1, r2) => r2.area - r1.area);

function rectEdgeCollision(rect, edge) {
  const xCollision =
    (edge.x1 >= rect.x1 && edge.x1 <= rect.x2) ||
    (edge.x2 >= rect.x1 && edge.x2 <= rect.x2) ||
    (rect.x1 >= edge.x1 && rect.x1 <= edge.x2) ||
    (rect.x2 >= edge.x1 && rect.x2 <= edge.x2);
  const yCollision =
    (edge.y1 >= rect.y1 && edge.y1 <= rect.y2) ||
    (edge.y2 >= rect.y1 && edge.y2 <= rect.y2) ||
    (rect.y1 >= edge.y1 && rect.y1 <= edge.y2) ||
    (rect.y2 >= edge.y1 && rect.y2 <= edge.y2);

  return xCollision && yCollision;
}

// return true if the rect intersects the edge
// but at the same time it goes over both sides (if the edge is vertical,
// the rect has dots on the left and right.
function overlapsBothSides(rect, edge) {
  if (rectEdgeCollision(rect, edge)) {
    if (edge.vertical) {
      if (rect.x1 < edge.x1 && rect.x2 > edge.x2) {
        return true;
      }
    } else if (edge.horizontal) {
      if (rect.y1 < edge.y1 && rect.y2 > edge.y2) {
        return true;
      }
    } else throw new Error("Found edge that's not vertical nor horizontal");
  }
  return false;
}

for (let i = 0; i < rects.length; i++) {
  let rect = rects[i];
  let approved = true;
  for (let e = 0; e < edges.length; e++) {
    let edge = edges[e];
    if (overlapsBothSides(rect, edge)) {
      approved = false;
      break;
    }
  }
  if (approved) {
    console.log(rect.area);
    console.log(rect);
    break;
  }
}

// 1528567740 too low
*/
