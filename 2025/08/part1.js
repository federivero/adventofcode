import { input } from "./input.js";

const nodes = input.split("\n").map((line, index) => {
  const rawCoords = line.split(",");
  return {
    n: index,
    x: parseInt(rawCoords[0]),
    y: parseInt(rawCoords[1]),
    z: parseInt(rawCoords[2]),
    nodes: [],
  };
});

const pairsToMake = 1000;

function distance(node1, node2) {
  return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2) + Math.pow(node1.z - node2.z, 2));
}

const distances = [];

// step 1: calculate distances
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    distances.push({ n1: i, n2: j, dist: distance(nodes[i], nodes[j]) });
  }
}

// step 2: sort
distances.sort((e1, e2) => e1.dist - e2.dist);

// step 3: create graph
let edges = distances.slice(0, pairsToMake);
for (let i = 0; i < edges.length; i++) {
  let e = edges[i];
  nodes[e.n1].nodes.push(nodes[e.n2]);
  nodes[e.n2].nodes.push(nodes[e.n1]);
}

// step 4: find connected components
let connectedComponents = [];
let unmarkedNodes = nodes.slice();
while (unmarkedNodes.length > 0) {
  let connComponent = [];
  let node = unmarkedNodes.pop();
  node.visited = true;
  connComponent.push(node);

  let unprocesssed = [node];
  while (unprocesssed.length > 0) {
    node = unprocesssed.pop();
    for (let i = 0; i < node.nodes.length; i++) {
      let node2 = node.nodes[i];
      if (!node2.visited) {
        node2.visited = true;
        unprocesssed.push(node2);
        connComponent.push(node2);

        unmarkedNodes = unmarkedNodes.filter((node) => node !== node2);
      }
    }
  }

  connectedComponents.push(connComponent);
}

// step 5: sort components by nodes
connectedComponents.sort((c1, c2) => c2.length - c1.length);
let sizes = connectedComponents.map((c) => c.length);

console.log(sizes[0] * sizes[1] * sizes[2]);
