const input = `Player 1 starting position: 1
Player 2 starting position: 2`

let sample = `Player 1 starting position: 4
Player 2 starting position: 8`

let lines = sample.split("\n")

let p1 = parseInt(lines[0].split(" ")[4])
let p2 = parseInt(lines[1].split(" ")[4])

let players = [p1, p2]
let points = [0, 0]
let trackSize = 10;
let rollsPerTurn = 3;
let maxDice = 100;
let dice = 1;

let targetPoints = 21;
let finished = false;
let turn = 0;
let rollCount = 0;
let multiplierCount = 0;
while (!finished){

    let moves = 0
    for (let i = 0; i < rollsPerTurn; i++){
        moves = moves + dice;
        dice = (dice + 1) 
        if (dice === maxDice + 1){
            dice = 1
        }
    }
    rollCount += rollsPerTurn


    players[turn] = ((players[turn] + moves - 1) % trackSize) + 1
    points[turn] = points[turn] + players[turn] 
    if (points[turn] >= targetPoints){
        finished = true;
    }
    turn = (turn + 1) % players.length;
}

let losingPoints = points[turn]
console.log(losingPoints * rollCount)