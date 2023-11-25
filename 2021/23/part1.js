const input = `#############
#...........#
###C#B#D#A###
  #B#D#A#C#
  #########`

const sample = `#############
#...........#
###B#C#B#D###
  #A#D#C#A#
  #########`


const lines = sample.split("\n");

let roomCodes = ['A', 'B', 'C', 'D']

let rooms = [];
let roomsTemp = [];
for (let i = 0; i < 4; i++){
    rooms.push([]);
    roomsTemp.push([]);
}

let targetRoom = 0;
lines[2].split("").map((ch) => {
    if (ch !== "#"){
        roomsTemp[targetRoom].push(ch);
        targetRoom++;
    }
})
targetRoom = 0;
lines[3].split("").map((ch) => {
    if (ch !== "#" && ch !== " "){
        roomsTemp[targetRoom].push(ch);
        targetRoom++;
    }
})

function Node(id){
    this.neighbors = [];
    this.amphipod = null;
    this.id = id
}

Node.prototype.addNeighbor = function(node, cost){
    this.neighbors.push({ node: node, cost: cost })
}

function printNode(node){
    console.log("node ", node.id, " amphipod?", node.amphipod)
    console.log("neighbors: ")
    for (let i = 0; i < node.neighbors.length; i++){
        console.log(node.neighbors[i].node.id, node.neighbors[i].cost)
    }
}

// construct hallway 
let hallway = [];
for (let i = 0; i < 7; i++){
    const n = new Node(`h-${i}`);
    hallway.push(n);
}

for (let i = 0; i < 6; i++){
    let n1 = hallway[i];
    let n2 = hallway[i+1];

    const cost = (i === 0 || i === 5)? 1 : 2;
    n1.addNeighbor(n2, cost);
    n2.addNeighbor(n1, cost);
}

let amphipods = [];
for (let i = 0; i < roomsTemp.length; i++){
    let r = roomsTemp[i];
    for (let j = 0; j < r.length; j++){
        let n = new Node(`r-${i}-${j}`)
        n.isRoom = true;
        n.code = roomCodes[i];
        let amphipod = { type: r[j], node: n, visited: [n] };
        n.amphipod = amphipod;
        amphipods.push(amphipod);    
        rooms[i].push(n);
    }
}

// add room neighbors
for (let i = 0; i < rooms.length; i++){
    let r0 = rooms[i][0];
    let r1 = rooms[i][1];

    r0.addNeighbor(r1, 1);
    r1.addNeighbor(r0, 1);

    let h1 = hallway[1 + i]
    let h2 = hallway[1 + i + 1]
    r0.addNeighbor(h1, 2);
    r0.addNeighbor(h2, 2);
    h1.addNeighbor(r0, 2);
    h2.addNeighbor(r0, 2);
}

const amphipodCost = {
    A: 1,
    B: 10,
    C: 100,
    D: 1000,
}

// calculate all possible movements for the amphipods
// 1) no amphipod can go to a place it has previously went
function getNextConfigurations(amphipods){
    for (let i = 0; i < amphipods.length; i++){
        
    }
}

function calculateBestCost(amphipods){
    let cost = 0;
    for (let i = 0; i < amphipods.length; i++){
        let a = amphipods[i];
        if (a.node.code !== a.type){

        }
    }
    return cost;
}

let startCost = calculateBestCost(amphipods);
console.log(startCost);

let config = { amphipods: amphipods, energySpent: 0, currentCost: startCost }

let configsByCost = [];
configsByCost[startCost] = [config];
let bestCost = startCost;

function pathfinding(){
    let finished = false;
    while (!finished){
        // find next configuration to try;
        let config = null;
        while (config === null){
            let configs = configsByCost[bestCost]
            if (configs?.length > 0){
                config = configs.shift();
            }else{
                bestCost++;
            }
        }

        let movements = getNextConfigurations(config);
        for (let i = 0; i < movements.length; i++){
            let m = movements[i];
            let hcost = calculateBestCost(m.amphipods);
            let newCost = m.cost + hcost;
            if (hcost === 0){
                console.log("FINISHED!")
                console.log(newCost)
                console.log(amphipods);
                return;
            }
            let config = { amphipods: m.amphipods, energySpent: config.energySpent + m.cost, currentCost: newCost }
            if (!configsByCost[newCost]) configsByCost[newCost] = []
            configsByCost[newCost].push(config);
        }
    } 
}


pathfinding();
