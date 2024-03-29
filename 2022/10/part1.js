const input = `addx 1
addx 5
noop
addx -1
noop
noop
addx 6
addx 15
addx -9
noop
addx -1
addx 4
addx 2
addx -22
addx 27
addx -1
addx 4
noop
addx 1
addx 2
noop
noop
noop
noop
addx 1
addx -33
addx 2
addx 5
addx 2
addx 3
addx -2
addx 7
noop
addx -2
addx -8
addx 15
addx 5
noop
noop
addx -2
addx 2
noop
noop
addx 7
addx -14
noop
addx -2
addx -17
addx 5
addx -4
noop
addx 23
addx -18
noop
noop
noop
addx 28
addx -18
addx 4
noop
noop
addx -5
addx 1
addx 10
addx 2
noop
noop
addx -30
addx 33
addx -32
noop
noop
addx -2
addx 6
addx -2
addx 4
addx 3
addx 19
addx 10
addx -5
addx -16
addx 3
addx -2
addx 17
addx -19
addx 11
addx 2
addx 9
noop
addx -4
addx -6
addx -7
addx -24
noop
addx 7
addx -2
addx 5
addx 2
addx 3
addx -2
addx 2
addx 5
addx 2
addx 7
addx -2
noop
addx 3
addx -2
addx 2
addx 7
noop
addx -2
addx -34
addx 1
addx 1
noop
noop
noop
addx 5
noop
noop
addx 5
addx -1
noop
addx 6
addx -1
noop
addx 4
addx 3
addx 4
addx -1
addx 5
noop
addx 5
noop
noop
noop
noop
noop
addx 1
noop
noop`;

const sample = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

let lines = input.split("\n");

let x = 1;
let cycle = 0;

let signals = [20, 60, 100, 140, 180, 220];
let strength = 0;
let nextSignalIndex = 0;
let nextSignal = signals[nextSignalIndex];

for (let i = 0; i < lines.length; i++){
    let inst = lines[i];
    let tokens = inst.split(" ");

    let code = tokens[0];
    let param = null;
    let instCycles = 0;
    if (code === "noop"){
        instCycles = 1;
    }else if (code === "addx"){
        param = parseInt(tokens[1]);
        instCycles = 2;
    } else{
        console.error("unsupported operation");
    }

    for (let j = 0; j < instCycles; j++){
        cycle++;

        if (cycle === nextSignal){
            strength += nextSignal * x;

            nextSignalIndex++;
            nextSignal = signals[nextSignalIndex];
        }
    }

    if (code === "addx"){
        x += param;
    }
}

console.log(strength);
