const input = `Valve SZ has flow rate=0; tunnels lead to valves GQ, YZ
Valve SP has flow rate=0; tunnels lead to valves LJ, AA
Valve LQ has flow rate=0; tunnels lead to valves EY, JT
Valve AT has flow rate=17; tunnels lead to valves DX, BU, NE, BR, TD
Valve IR has flow rate=0; tunnels lead to valves XN, UI
Valve CF has flow rate=0; tunnels lead to valves XN, BR
Valve TE has flow rate=0; tunnels lead to valves YA, RY
Valve GQ has flow rate=22; tunnels lead to valves SZ, AQ, OW, XJ
Valve DX has flow rate=0; tunnels lead to valves HI, AT
Valve AQ has flow rate=0; tunnels lead to valves AZ, GQ
Valve NE has flow rate=0; tunnels lead to valves AT, IA
Valve OC has flow rate=4; tunnels lead to valves PE, QV, QI, LJ, WX
Valve JO has flow rate=0; tunnels lead to valves AA, UI
Valve BR has flow rate=0; tunnels lead to valves CF, AT
Valve ZW has flow rate=0; tunnels lead to valves JH, EY
Valve TD has flow rate=0; tunnels lead to valves AT, WX
Valve BU has flow rate=0; tunnels lead to valves AT, ES
Valve QI has flow rate=0; tunnels lead to valves OC, XN
Valve PE has flow rate=0; tunnels lead to valves CI, OC
Valve WX has flow rate=0; tunnels lead to valves TD, OC
Valve IA has flow rate=0; tunnels lead to valves UI, NE
Valve TR has flow rate=18; tunnel leads to valve HI
Valve JK has flow rate=0; tunnels lead to valves QV, UI
Valve UB has flow rate=0; tunnels lead to valves OM, AA
Valve KW has flow rate=0; tunnels lead to valves YL, MD
Valve AL has flow rate=0; tunnels lead to valves ZL, WZ
Valve VK has flow rate=11; tunnels lead to valves OM, ZL, CI, VA, XJ
Valve FF has flow rate=0; tunnels lead to valves VD, AA
Valve MD has flow rate=0; tunnels lead to valves KW, YA
Valve VA has flow rate=0; tunnels lead to valves AZ, VK
Valve CI has flow rate=0; tunnels lead to valves VK, PE
Valve LJ has flow rate=0; tunnels lead to valves SP, OC
Valve YL has flow rate=23; tunnels lead to valves OW, KW
Valve JH has flow rate=0; tunnels lead to valves RK, ZW
Valve ES has flow rate=13; tunnel leads to valve BU
Valve OM has flow rate=0; tunnels lead to valves UB, VK
Valve QV has flow rate=0; tunnels lead to valves OC, JK
Valve XN has flow rate=7; tunnels lead to valves QI, VD, IR, CF, OG
Valve EY has flow rate=10; tunnels lead to valves ZW, LQ, XC, RC
Valve XJ has flow rate=0; tunnels lead to valves GQ, VK
Valve HI has flow rate=0; tunnels lead to valves DX, TR
Valve VD has flow rate=0; tunnels lead to valves FF, XN
Valve RY has flow rate=0; tunnels lead to valves AZ, TE
Valve YZ has flow rate=0; tunnels lead to valves SZ, YA
Valve YA has flow rate=12; tunnels lead to valves YZ, MD, TE
Valve AZ has flow rate=14; tunnels lead to valves AQ, RC, RY, VA
Valve ZL has flow rate=0; tunnels lead to valves AL, VK
Valve UE has flow rate=0; tunnels lead to valves RK, UI
Valve WZ has flow rate=25; tunnel leads to valve AL
Valve EB has flow rate=0; tunnels lead to valves AA, XC
Valve UI has flow rate=8; tunnels lead to valves UE, JK, IR, JO, IA
Valve AA has flow rate=0; tunnels lead to valves UB, JO, FF, EB, SP
Valve OG has flow rate=0; tunnels lead to valves XN, DF
Valve RC has flow rate=0; tunnels lead to valves AZ, EY
Valve JT has flow rate=21; tunnel leads to valve LQ
Valve DF has flow rate=0; tunnels lead to valves OG, RK
Valve RK has flow rate=9; tunnels lead to valves DF, JH, UE
Valve OW has flow rate=0; tunnels lead to valves YL, GQ
Valve XC has flow rate=0; tunnels lead to valves EY, EB`;

const sample = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`;

let lines = input.split("\n")

let valves = [];

for (let i = 0; i < lines.length; i++){
    let tokens = lines[i].split(" ");
    let valve = { name: tokens[1], rate: parseInt(tokens[4].slice(5, tokens[4].length - 1))}

    let connections = tokens.slice(9).join("").split(",");
    valve.connections = connections;
    valves.push(valve);
}

function getValve(valves, id){
    return valves.find((v) => v.name == id)
}

for (let i = 0; i < valves.length; i++){
    let valve = valves[i];
    let codes = valve.connections;    
    let connections = [];
    for (let j = 0; j < codes.length; j++){
        let v = getValve(valves, codes[j]);
        connections.push({ v, cost: 1 });
    }
    valve.connections = connections;
}

// simplify
for (let i = valves.length - 1; i >= 0; i--){
    let v = valves[i];
    if (v.rate == 0 && v.name != 'AA'){
        for (let q = 0; q < v.connections.length; q++){
            for (let k = q + 1; k < v.connections.length; k++){
                let v1 = v.connections[q];
                let v2 = v.connections[k];
                // check if already connected
                if (v1.v.connections.find((conn) => conn.v == v2.v)){
                    let v1v2 = v1.v.connections.find((conn) => conn.v == v2.v);
                    v1v2.cost = Math.min(v1.cost + v2.cost, v1v2.cost);
                    let v2v1 = v2.v.connections.find((conn) => conn.v == v1.v);
                    v2v1.cost = Math.min(v1.cost + v2.cost, v2v1.cost);
                }else{
                    v1.v.connections.push({ v: v2.v, cost: v1.cost + v2.cost });
                    v2.v.connections.push({ v: v1.v, cost: v1.cost + v2.cost });
                }
            }
        } 
        valves.splice(i, 1);   
    }
}

// now also remove all connections to rates 0
for (let i = 0; i < valves.length; i++){
    let v = valves[i];
    v.connections = v.connections.filter((c) => c.v.rate != 0 || c.v.name == 'AA')
}

let bestRates = {
    35: 1523, // 2145
    33: 1743, // 2292
    32: 1805, // 2291
    31: 1805, // 2291
    30: 1805, // 2291
    29: 1843, // 2176
    25: 1987, // 2218
}

// backtracking
function getMaximumRelease(currentYou, currentElephant, timeLeftYou, timeleftElephant, released, valvesToOpen, lastNodeYou, lastNodeElephant){
    let maxReleased = released;
    
    if (timeLeftYou + timeleftElephant < 33){
        if (released < bestRates[33])
            return maxReleased; // cut
    }

    if (valvesToOpen > 0){
        if (timeLeftYou >= timeleftElephant){
            // you move first
            if (currentYou.rate > 0 && !currentYou.opened){
                if (timeLeftYou > 0){
                    const valveRelease = released + (timeLeftYou - 1) * currentYou.rate;
                    currentYou.opened = true;
                    maxReleased = Math.max(maxReleased, getMaximumRelease(
                        currentYou, 
                        currentElephant, 
                        timeLeftYou - 1, 
                        timeleftElephant,
                        valveRelease, 
                        valvesToOpen - 1, 
                        null,
                        lastNodeElephant));
                    currentYou.opened = false;
                }
            }
            for (let i = 0; i < currentYou.connections.length; i++){
                const conn = currentYou.connections[i];
                const timeAfter = timeLeftYou - conn.cost;
                if (timeAfter > 0 && lastNodeYou != conn.v){
                    maxReleased = Math.max(maxReleased, getMaximumRelease(
                        conn.v, 
                        currentElephant,
                        timeAfter, 
                        timeleftElephant, 
                        released, 
                        valvesToOpen, 
                        currentYou,
                        lastNodeElephant));
                }
            }        
        }else{
            if (currentElephant.rate > 0 && !currentElephant.opened){
                if (timeleftElephant > 0){
                    const valveRelease = released + (timeleftElephant - 1) * currentElephant.rate;
                    currentElephant.opened = true;
                    maxReleased = Math.max(maxReleased, getMaximumRelease(
                        currentYou, 
                        currentElephant, 
                        timeLeftYou, 
                        timeleftElephant - 1,
                        valveRelease, 
                        valvesToOpen - 1, 
                        lastNodeYou,
                        null));
                    currentElephant.opened = false;
                }
            }
            for (let i = 0; i < currentElephant.connections.length; i++){
                const conn = currentElephant.connections[i];
                const timeAfter = timeleftElephant - conn.cost;
                if (timeAfter > 0 && lastNodeElephant != conn.v){
                    maxReleased = Math.max(maxReleased, getMaximumRelease(
                        currentYou, 
                        conn.v,
                        timeLeftYou, 
                        timeAfter, 
                        released, 
                        valvesToOpen, 
                        lastNodeYou,
                        currentElephant));
                }
            }     
        }
    }    
    return maxReleased;
}

let part1Max = 1828;

let time = 26;

let valvesToOpen = valves.filter((valve) => valve.rate > 0).length
let current = getValve(valves, 'AA');
let max = getMaximumRelease(current, current, time, time, 0, valvesToOpen, null, null);

console.log(max);
