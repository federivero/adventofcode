const input = `#.######################################################################################################################################################
#>>>v.<>v>.<<^v.>.<<>v>^v^>v<v^>v<<<v.><vv>>>v^<<v>>^vv>vv.v^.v<<vv>vv>.>^<^^<<><v^<>^^.<v^<v>^>v<>v^<.v.^>^.>>^^<^^vv.<<v<<><^v.>^^^.<^v><.>>^.<^^<>^.#
#>^<>>>^.^>v^<^v<^v^<><v>>v>^>>..v<<<^>vv>.>v>><<.v>v.<^>.v^v^>vv<v<v^v.v<<v.v<^v>^^>v^><>^<v<^<v.v^.>^>>>v.<^>v.^^><<v>v^v.^v<.v><.^<<<>^.^>>>.^>.<<v<#
#<>.<.<>v^v^<<^<v><<<v<<v.v.>v<<<><.<<<<v^>v^v^>^v<^.<>vvv<^^>.><>^>..vvvvv^v>..<^vv.<>v^><>^^v<>v^..^<vv<v^<>^<v.^v>v>>..<>>vv^<^v>vv<^.<<^>>.>>>v>><>#
#>>>^<^.>^<v>^><^^>^>.^><^>^^^<<^^>>>.<^vv.<<>v<v.<vv<>><..^<^<>v<<^vv>>^<v^^>v<^^>^.^^<v<><^^^v>>>>><^v^^<v<^vv<^v^v^^<.>>^><v^^><v.^^v<<<v^>v>^v.^.v.#
#>^>>v^^.>v<v^^^<<.>>>>>^<vv^<v^>^>vvv<v<<^..^v>>><^v<>v><v>><<>>^^^v<<..<v^.><^^>v>>.<>>>^><<>^<v>>^>v<>v<^^vv.^<>>v<<v.>>v.^<>^^vv^^<^v.>>>^^.<<<v^^>#
#>v.<>vv^.^><>v>^<<.^<^v<vv<<<^^^><^><.^<.^<>^...^<<v.<v><<.<vvv>>v>v^v^>v<v.<<v<^.^<<.>^><^<^v<v^>>>^.^^<<><^>^v><v>>^>>>>^>vv.v<^<.^>.v><<<><.><>^^<>#
#<<^^^>vv<^<..v.<>^^^>.^v.vv^><><.v^^^>^^>^<v.v<>v^.^v^v>.<<>v><>^^>v^<<<vv><>^>..<^.^vv>^.^^<vvv<<>><vv.>>vv<..^<^.vv.^<<.<vv^^>>>.<<<v.<^<^^<v.vvv<^.#
#<v<<<.^^>^v>v^<>><v<v>^^v><^v>>^vv^>v^>v.<^<<>.^v^v^^v.v>^<^.^<<>^^>^vv>..v<^^>^.>^v^<<^<<v<<>><><v^^<^^.>^><vv>>.^>.^<.vv^.^.^<v><<>>>^^.v^<<<v>^.^<>#
#>v^<v<>><<<>^<<v^<^<.>>v<<^<v^v.v^vv>^><<vv>v>^^^v^v>.v<^^<<<><vvv^>v^^^>>^<vv<v.v^^>vv.^v>v^>.>v><.>.>^>^^v.v<^<>><<>v<^v>^^^>v><<<..<^.>.^>v.^><.vv>#
#>><>.vvv^vv^>^><<>vv<^>.>><>.>.<^v><vv<^>>>v^^<>^>^>^>v^vvv<vv<<><<<v<^^^<>v^v>^v^>v>>v^v<vv^.v<v.^.<>^v>.>v<^><><v^^^<><<^v>v.>>..<^v>v><^.vvv.^v>>>>#
#.<<>^.<<<>vv^>^>>>v^.><<<.<v^^v<>v<<v.<<v^>vv<<<<>^<^>>v>>^v<v<v>>.v.<vvv<<^v<.><vv><>v<<^^>>><<v>vvv<v<.v>v^v>^^vv^^^^^^<<^><>vv.vv>vvv.<^v^>>^<^v^><#
#>^.v^>>^^vvv>>^>^.>v.^>><v.vv^<>><>^v^.>^<<^v.<^^v>><<>.^>>^.<^^>^v>>^<<<>><^v<<^^v.^>vv^v<<.^>^<v<<..<^<>>.<<<v>^.<^<v<^v>vv^vv^.>>.vv<<^vv<v^><v>>v>#
#<v^>vv<>v^>><>>v^v<<vv>^<..><v^^v>vvv.v^<><v^<>><.^v.^^.<>>^<<>.v^vv^>v>v^v><vvv>>>.>^.><<<>^.<^v<^.^^v>vv>v>v^>..<v.>v>.^v>vv^><>^>^v^v^.vv^><>.v<>^>#
#<^<><<><v.v<^^vv<<<v<^^^<>.v<<^.v<<v.>^v><<^><vvv><v^vv><>^.v^^^<>>^^^<v>v.^v<<v>v<v.v^^<><^>>v>>.v^^>vvvvv^<^>^<v^<v^>.>^<><<>.<v<^.>.^<v><>v<v^.>>v>#
#>.^<v>^v.^.>v>>v.v>>>^<<v>^<<<>v>vv.^v^>vv<^>>v^>^>^<>.>v<<^<^v^^<<><>.>v.^>^<.v<<^<^<<^^<^vv<v^<.^.^.v<^>^<.vv<v^<^><<><<^v.^vv.v^<vv<v<v<^v^>>^<v<v>#
#<>^^^<<<<^>>vvv>^>>vv^v^v.><^>.>.><v.>>v^<>v<vv^.^v><<v<><vvv<vv^v^>.>^vv<^<^<><><.<^v^>v<.v^<^^^v<^v<<^v>^>v>>^^^v^v>^vvvvv<vv<v>.vv>>^^>>^v<^v>^^^><#
#<.v><v<v^^<^><.v<<^^>>v><v^<><^<v^^^>>.<v.>^<v><>^>vv<<<v^<.vvv<..v^<v.<^<>v>v^^v^^^>v<>.^^^v<v^>><^<^<<^.^><.vvv.<v>v^<^>vv^<<^>.><<^v<^^<>>v<^>v.v^>#
#>v.<<<^>v^^v<.><^^v.<v^>>^vv>^v>>^><<v.^vvv>^.><>^.>v<>>>.>^.>>^.<^>v^>.vv.>^>^.<>>>vv^>.v>.v<v<^>v>>v><>v^^^>v>>^<<v>.<<<v^v<^<<v^v<>v^<>>>v><^v.^^^>#
#>^>.<v.vv>v>>^>.>>v>^<<^<>>.^><v<^<><v^<<v^>^^^vv>..v^^^v^>.^^.v.v><><v..<^>v>v^>.<v^^^<v>.<<vvv^vv<><v>v^^vv>.><vv>>^>.v..<v^vvv<<^vv..><.vv>.<^^>.>>#
#<<v.>>vv.>v<^<^<<v<<<<v^.<.>>>^..v>v>v^^>vv<.<.^^><<.vv.<.<^.<>.v^.^<>vv^vv.<<v.^^<<>^^>v<vv>><><v<<<.^v>v<>^v<^^<^v<>^<v^><v>>>^<<>^<v.^>><v<v^v^v><>#
######################################################################################################################################################.#`;

let sample = `#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`;

const lines = input.split("\n");

let h = lines.length
let w = lines[0].length
let target = { r: lines.length - 2, c: lines[0].length - 2 }
let start = { r: 1, c: 1 };
let minute = 0;

let maps = [];

// directions
function generateMaps(){
    let map = lines
    let blizzards = [];
    for (let r = 0; r < map.length; r++){
        let row = map[r];
        for (let c = 0; c < row.length; c++){
            if (row[c] === ">"){
                blizzards.push({ r: r, c: c, dir: 'R'})
            }else if (row[c] === "<"){
                blizzards.push({ r: r, c: c, dir: 'L'})
            }else if (row[c] === "v"){
                blizzards.push({ r: r, c: c, dir: 'D'})
            }else if (row[c] === "^"){
                blizzards.push({ r: r, c: c, dir: 'U'})
            }
        }
    }

    const minuteLimit = 2000
    for (let minute = 0; minute < minuteLimit; minute++){
        let map = [];
        for (let r = 0; r < h; r++){
            map.push([]);
            for (let c = 0; c < w; c++){
                if (c === 0 || r === 0 || c === w - 1 || r === h -1){
                    map[r][c] = "#";
                }else{
                    map[r][c] = ".";
                }
            }
        }
        // place blizzards
        for (let i = 0; i < blizzards.length; i++){
            let b = blizzards[i];
            map[b.r][b.c] = "#"
        }
        // move blizzards
        for (let i = 0; i < blizzards.length; i++){
            let b = blizzards[i];
            switch (b.dir){
                case "U": 
                    b.r--;
                    if (b.r === 0){
                        b.r = h - 2;
                    }
                    break;
                case "D":
                    b.r++;
                    if (b.r === h - 1){
                        b.r = 1;
                    }
                    break;
                case "L":
                    b.c--;
                    if (b.c === 0){
                        b.c = w - 2;
                    }
                    break;
                case "R":
                    b.c++;
                    if (b.c === w - 1){
                        b.c = 1;
                    }
                    break;                 
            }
        }
        maps.push(map)
    }
}

generateMaps();

function hfunc(r, c){
    return target.c - c + target.r - r
}

let currentCost = hfunc(start.r, start.c);
let evaluating = []

evaluating[currentCost] = [{ minute: 1, cost: 1 + currentCost, r: start.r, c: start.c }]
const evaluated = {};

function insertEvaluating(entry){
    const key = `m-${entry.minute}r-${entry.r}c-${entry.c}`
    if (evaluated[key])
        return
    evaluated[key] = true;

    if (!evaluating[entry.cost])
        evaluating[entry.cost] = []
    evaluating[entry.cost].push(entry)
}

let finished = false;
while (!finished){
    while (!evaluating[currentCost] || evaluating[currentCost].length === 0){
        currentCost++;
    }
    let next = evaluating[currentCost].shift();
    next.minute++;
    if (maps[next.minute][next.r][next.c] === "."){
        // evaluate stay
        let copy = { ...next }
        copy.cost++; // add 1 due to minute
        insertEvaluating(next);
    }
    if (next.r > 1 && maps[next.minute][next.r - 1][next.c] === "."){
        // eval move up
        let copy = { ...next }
        copy.r--;
        copy.cost = copy.minute + hfunc(copy.r, copy.c)
        insertEvaluating(copy)
    }
    if (next.r < h - 1 && maps[next.minute][next.r + 1][next.c] === "."){
        // eval move down
        let copy = { ...next }
        copy.r++;
        copy.cost = copy.minute + hfunc(copy.r, copy.c)
        insertEvaluating(copy)
        if (copy.r === target.r && copy.c === target.c){
            finished = true;
            console.log("found target at cost ", copy.cost + 1)
        }
    }
    if (next.c > 1 && maps[next.minute][next.r][next.c - 1] === "."){
        // eval move left
        let copy = { ...next }
        copy.c--;
        copy.cost = copy.minute + hfunc(copy.r, copy.c)
        insertEvaluating(copy)
    }
    if (next.c < w - 1 && maps[next.minute][next.r][next.c + 1] === "."){
        // eval move right
        let copy = { ...next }
        copy.c++;
        copy.cost = copy.minute + hfunc(copy.r, copy.c)
        insertEvaluating(copy)
        if (copy.r === target.r && copy.c === target.c){
            finished = true;
            console.log("found target at cost ", copy.cost + 1)
        }
    }
}

function printMap(map){
    console.log(map.map((r) => r.join("")).join("\n"))
}
// printMap(maps[3])