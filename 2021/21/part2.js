const input = `Player 1 starting position: 1
Player 2 starting position: 2`

let sample = `Player 1 starting position: 4
Player 2 starting position: 8`

let lines = input.split("\n")

let p1 = parseInt(lines[0].split(" ")[4])
let p2 = parseInt(lines[1].split(" ")[4])

let points = [0, 0]
let trackSize = 10;
let rollsPerTurn = 3;

let targetPoints = 21;
let finished = false;

let solutions = {};
let dice = [1,2,3];

function getSolutionKey(p1, p2, pointsp1, pointsp2, turn, rollsLeft){
    return `p1-${p1}:p2-${p2}:pointsp1-${pointsp1}:pointsp2-${pointsp2}:turn-${turn}:rollsLeft-${rollsLeft}`
}

function playDiracDice(p1, p2, pointsp1, pointsp2, turn, rollsLeft){
    let key = getSolutionKey(p1, p2, pointsp1, pointsp2, turn, rollsLeft);
    if (solutions[key]){
        return solutions[key]
    }
    
    rollsLeft--;
    if (rollsLeft === 0){
        // add points
        if (turn === 0){
            pointsp1 = pointsp1 + p1
            if (pointsp1 >= targetPoints){
                solutions[key] = 1;
                return 1;
            }
        }else{
            pointsp2 = pointsp2 + p2
            if (pointsp2 >= targetPoints){
                solutions[key] = 0
                return 0;
            }
        }

        turn = (turn + 1) % 2;
        rollsLeft = rollsPerTurn;
    }

    let winsp1 = 0;
    if (turn === 0){
        for (let i = 0; i < dice.length; i++){
            let d = dice[i];
            let newp1 = ((p1 + d - 1) % trackSize) + 1
            winsp1 += playDiracDice(newp1, p2, pointsp1, pointsp2, turn, rollsLeft);
        }
    }else{
        for (let i = 0; i < dice.length; i++){
            let d = dice[i];
            let newp2 = ((p2 + d - 1) % trackSize) + 1
            winsp1 += playDiracDice(p1, newp2, pointsp1, pointsp2, turn, rollsLeft);
        }   
    }
    solutions[key] = winsp1;
    return winsp1;
}

console.log(playDiracDice(p1, p2, 0, 0, 0, 4))
