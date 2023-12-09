const input = `Time:        40     70     98     79
Distance:   215   1051   2147   1005`

const test = `Time:      7  15   30
Distance:  9  40  200` 

let lines = input.split("\n")
let times = lines[0].split(" ").map((t) => parseInt(t)).filter(n => !isNaN(n))
let distances = lines[1].split(" ").map((t) => parseInt(t)).filter(n => !isNaN(n))


let victories = [];
for (let i = 0; i < times.length; i++){
    let time = times[i];
    let distanceToBeat = distances[i];

    let victoryCount = 0;
    for (let t = 0; t < time; t++){
        let tics = time - t;
        let speed = t;
        let totalDist = speed * tics;
        if (totalDist > distanceToBeat){
            victoryCount++;
        }
    }
    victories.push(victoryCount);
}

console.log(victories.reduce((total, current) => total * current, 1))