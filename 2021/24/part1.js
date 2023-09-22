const input = `inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 6
#mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -7
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 4
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -6
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 11
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -9
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x 0
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y`

const sample1 = `inp w
add z w
mod z 2
div w 2
add y w
mod y 2
div w 2
add x w
mod x 2
div w 2
mod w 2`

const sample2 = `inp z
inp x
mul z 3
eql z x`

const program = input.split("\n").filter((l) => l[0] !== "#").map((inst) => inst.split(" "));


function getParam(param, x, y, z, w){
    switch (param){
        case "x": return x;
        case "y": return y;
        case "z": return z;
        case "w": return w;
        default: return parseInt(param)
    }
}

function executeProgram(program, inputFeed){
    let x = 0;
    let y = 0;
    let z = 0;
    let w = 0;
    let a = null;
    let b = null;
    for (let i = 0; i < program.length; i++){
        let inst = program[i];
        let result = null;
        let resultTarget = null;
        switch (inst[0]){
            case "inp":
                if (inputFeed.length > 0){
                    result = parseInt(inputFeed.shift());
                    resultTarget = inst[1]
                }else{
                    console.log("tried to read from empty input feed");
                    return -1;
                }
                break;
            case "add":
                result = getParam(inst[1], x, y, z, w) + getParam(inst[2], x, y, z, w);
                resultTarget = inst[1];
                break;
            case "mul":
                result = getParam(inst[1], x, y, z, w) * getParam(inst[2], x, y, z, w);
                resultTarget = inst[1];
                break;
            case "div":
                b = getParam(inst[2], x, y, z, w);
                if (b === 0){
                    console.log("tried to execute division by zero");
                    return -1;
                }
                result = Math.floor(getParam(inst[1], x, y, z, w) / b);
                resultTarget = inst[1];
                break;
            case "mod":
                a = getParam(inst[1], x, y, z, w)
                b = getParam(inst[2], x, y, z, w);
                if (a < 0){
                    console.log("tried to execute modulo with a < 0");
                    return -1;
                }
                if (b <= 0){
                    console.log("tried to execute modulo with b <= 0");
                    return -1;                    
                }
                result = a % b;
                resultTarget = inst[1];
                break;
            case "eql":
                result = (getParam(inst[1], x, y, z, w) === getParam(inst[2], x, y, z, w))? 1 : 0  
                resultTarget = inst[1];
                break;
        }
        if (resultTarget){
            switch (resultTarget){                
                case "x": x = result; break;
                case "y": y = result; break;
                case "z": z = result; break;
                case "w": w = result; break;
            }
        }
    }

    return z;
}

// digito 2 = irrelevante
// digito 6 = irrelevante
// digito 8 = irrelevante
// digito 12 = irrelevante
// digito 11 = 6 o 7?
// digito 10 = 4?
// digito 9 = 7?
// digito 7 = 4?
// digito 3 = 6?

// largest
// let n = "36969794979199".split("");

// smallest
let n = "11419161313147".split("");
// console.log(executeProgram(program, n))
let test = 13
console.log(n[test])
for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
        for (let k = test + 1; k <= 13; k++){
            let m = n.slice()
            m[test] = i.toString();
            m[k] = j.toString();
            let res = executeProgram(program, m);
            if (res === 0){
                console.log(i, j, k, res)
            }    
        }
    }
}
/*
let maxNum = 99999999999999;
let num = maxNum;
let found = false;
while (!found){
    let inputFeed = num.toString().split("")
    let res = executeProgram(program, inputFeed);
    if (res === 0){
        console.log("FOUND THE NUMBER", num)
        found = true;
    }else{
        console.log("attempting", num, res);
        num--;
        while (num.toString().split("").includes("0")){
            num--;
        }
    }
}
*/
