const input = `Time:        40     70     98     79
Distance:   215   1051   2147   1005`

const test = `Time:      7  15   30
Distance:  9  40  200` 

let lines = input.split("\n")
let time = lines[0].split(" ").map((t) => parseInt(t)).filter(n => !isNaN(n)).map((n) => n.toString()).join("")
let distance = lines[1].split(" ").map((t) => parseInt(t)).filter(n => !isNaN(n)).map((n) => n.toString()).join("")

console.log(time, distance);

let victoryCount = 0;
for (let t = 0; t < time; t++){
    let tics = time - t;
    let speed = t;
    let totalDist = speed * tics;
    if (totalDist > distance){
        victoryCount++;
    }
}

console.log(victoryCount);
