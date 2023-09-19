const input = `5651341452
1381541252
1878435224
6814831535
3883547383
6473548464
1885833658
3732584752
1881546128
5121717776`

var lines = input.split("\n");

var jellyfish = [];
for (let i = 0; i < lines.length; i++){
    jellyfish.push([]);
    for (let j = 0; j < lines[i].length; j++){
        jellyfish[i].push(parseInt(lines[i][j]));
    }
}

let gridsize = 10;
 
var triggerlit = function(x, y){
    for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j++){
            let row = i + x;
            let column = j + y;
            if (row >= 0 && column >= 0 && row < gridsize && column < gridsize){
                jellyfish[row][column]++;
                if (jellyfish[row][column] == 10){
                    triggerlit(row, column);
                }
            }
        }
    }
}

// now pass steps
let stepcount = 100;
var litcount = 0;
for (let step = 0; step < stepcount; step++){
    
    // add 1 to every 
    for (let i = 0; i < gridsize; i++){
        for (let j = 0; j < gridsize; j++){
            jellyfish[i][j]++;
            if (jellyfish[i][j] == 10){
                triggerlit(i, j);
            }
        }
    }

    // add lits    
    for (let i = 0; i < gridsize; i++){
        for (let j = 0; j < gridsize; j++){
            if (jellyfish[i][j] >= 10){
                jellyfish[i][j] = 0;
                litcount++;
            }
        }
    }
}

console.log(litcount)
