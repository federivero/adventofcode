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

let lastEdgeAdded = null;
function addEdges(initDistance, count) {
  let edges = distances.slice(initDistance, initDistance + count);
  for (let i = 0; i < edges.length; i++) {
    let e = edges[i];
    lastEdgeAdded = e;
    nodes[e.n1].nodes.push(nodes[e.n2]);
    nodes[e.n2].nodes.push(nodes[e.n1]);
  }
}

// step 3: create graph
const initialPairsToMake = 1000;
let edgesAdded = 0;
addEdges(edgesAdded, initialPairsToMake);
edgesAdded = initialPairsToMake;

function hasOnlyOneConnectedComponent() {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].visited = false;
  }
  // step 4: find connected components
  let connectedComponents = [];
  let unmarkedNodes = nodes.slice();
  while (unmarkedNodes.length > 0) {
    if (connectedComponents.length > 0) {
      return false;
    }

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

  return true;
}

while (!hasOnlyOneConnectedComponent()) {
  addEdges(edgesAdded, 1);
  edgesAdded++;
  console.log(edgesAdded);
}

let lastNode1 = nodes[lastEdgeAdded.n1];
let lastNode2 = nodes[lastEdgeAdded.n2];

console.log(lastNode1.x * lastNode2.x);
