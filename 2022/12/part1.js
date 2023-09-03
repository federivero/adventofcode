const input = `abccccccccccccccccccccccccccaaaaaaaaacccccccccccaaacccccccccccccccccccccccccaaaaaaaaccccccccaaaaaaccaaccccccccccccccccccccccccaaaaacaacaaaacccccccccccccccccccccccccccccccccccccaaaaa
abccaaacccccccccccccccccccccaaaaaaaaacccccccccaaaaaacccccccccccccccccccccaaaaaaaaaaaccccccccaaaaaaccaaaaaacccaacaaccccccccccccaaaaaaaacaaaaaaccccccccccccccccccccccccccccccccccaaaaaa
abccaaaaccccccccccccccccccccaaaaaaaaccccccccccaaaaaaccccaaaaaccccccccccccaaaaaaaaaaacccccccccaaaaaccaaaaaccccaaaacccccccccccccccaaaaacccaaaaaccccccccccccccccccccaaccccccccccccaaaaaa
abccaaaacccccccaaaccccccccccaaaaaaacccccccccccaaaaaaccccaaaaaccccccccccccacaaaaaaaaaacccccccaaaaacaaaaaaacccaaaaaccccccccccccccaaaaacccaaaaaccccccccccccccccccccaaaaccccccccccccccaaa
abccaaaccccccaaaaaacccccccccaccaaaccccccccccccaaaaacccccaaaaaaccccaaaacccccaaaaaaaaaaaccccccaaaaacaaaaaaacccaaaaaacccccccccccccaacaaaccaccaacccccccccccccccaaaccaaaaccccccccccccccaaa
abcccccccccccaaaaaacccccccccccccaaacccccccccccaaaaacccccaaaaaaccccaaaaccccccaaaaacaaaaccccccccccccccaaaaaaccacaaaaccccaaaaacccccccaaccccccccccccccccccccccaaaackkkaccccccccccccccccaa
abcccccccccccaaaaaacccccccccccccccaaacccccccccccccccccccaaaaaaccccaaaacccccaaaaaccccaaccccccccccccccaaccaaccccaaccccccaaaaaccccccccccccccccccccccccccccccccaakkkkkkkccccccccccccccccc
abaccccccccccaaaaaccccccccccccccccaaaaccccccccccccccccccccaaaccccccaaccccccccaaaccccccccccccccccccccaacccccccccccccccaaaaaacccccccccccccccccccccaaacccccccccjkkkkkkkkccccccccaacccccc
abaccccccccccaaaaacccccaacccccccccaaaaccccccccccccaacccccccccccccccccccccccccaaacccccccccccccccccccccaaccccccaccaccccaaaaaaaaaccaccccccccccccccaaaaccccccccjjkkoopkkkkaccaacaaacccccc
abaccccccccccccccccaaaaaacccccccccaaacccccccccccccaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaccaaaaccccaaaaaaaaacaaccccccccccccccaaaacccccccjjjkoooppkkkaccaaaaaaaacccc
abcccccccccccccccccaaaaaaaaccccccccccccccccaccccccaaaaaaccccccccccccccccccccccccaaccaacccccccccccccccaaaaaacaaaaacccccaaacccaaaaacccccccccccccccaaacccccjjjjjoooppppkklccaaaaaaaacccc
abcccccccccccccccccaaaaaaaacccccccccccccccaaacccaaaaaaaccccaacccacccccccccccccccaaaaaaccccccccaaaccaaaaaaaccaaaaaaccccccccaaaaaacccccccccccccccccccccjjjjjjjoooouuppplllccaccaaaacccc
abccccccccccccccccccaaaaaaaccccaacccccaaacaaacccaaaaaaaccccaaacaacccccccccccccccaaaaaacccccccccaaaaaaaaaaaacaaaaaaccccccccaaaaaaaaccccccccccccccccciijjjjjjooouuuupppllllcccccccccccc
abccccccccccccccccccaaaaaccccccaacccccaaaaaaaaaaccaaaaaaccccaaaaaccccccccccccccaaaaaaacccccccaaaaaaaaaaaaaacccaaccccccccccaacaaaaacccccccccccccccciiiijoooooouuuuuuppplllllcccccccccc
abcccccccccccccccccaaaaaacccaacaaaaacccaaaaaaaaaccaaccaaccaaaaaacccccccccccccccaaaaaaaaccccccaaaaacccaaaaaacccaccccccccccccccaacccccccccccccccccciiiinnoooooouuxuuuupppplllllcccccccc
abcccccccccccccccccccccaacccaaaaaaaaccccaaaaaaccccaaccccccaaaaaaaaccaaaccccccccaaaaaaaacccccccaaaaaccaacaaaaaaaacccaaccccccccacccccccccaaaccccccciiinnnnntttuuuxxuuuppppqqllllccccccc
abccccccccccccaacccccccccccccaaaaaccccccaaaaaacccccaaaccccaaaaaaaaccaaaacccccccccaaaccccccccccaaccaccccccaaaaaacccaaaaaaccccccccccccccaaaaccccaaiiinnnntttttuuxxxxuuvpqqqqqllmmcccccc
abccccccccccaaaaaaccccccccccccaaaaaccccaaaaaaacccccaaacccccccaacccccaaaaccccaaccccaacccccccccccccccccccccaaaaaaccccaaaaaccccccccccccccaaaaccccaaiiinnnttttxxxxxxxyuvvvvvqqqqmmmcccccc
abccaaacccccaaaaaacccccccccccaaacaaccccaaacaaacccccaaaaaaacccaccccccaaaccccaaaacccccccccccccccccccccccccaaaaaaaacaaaaaaacccccccccaaacccaaaccccaaaiinnntttxxxxxxxxyyyyvvvvqqqmmmcccccc
abcaaaacccccaaaaaccccccccccccaaaccaccccccccccacccaaaaaaaaaaccccccccccccccccaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaccccccccaaaaaacccccaaaaaiiinnnttxxxxxxxyyyyyyvvvqqqmmmcccccc
SbcaaaaccccccaaaaacccccaaaccccccaaacccccccccaaccaaaaaaaaaaaacccccccccccccccaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccccccaaaaaaacccccaaaaaiiinnntttxxxxEzzyyyyvvvqqqmmmdddcccc
abccaaaccccccaaaaacccccaaaaccccaaaaaaccccccaaaaccaaaaaaacaaacccccaaccccccccccccccccccccccccccccccccccccacaaaaacccccaaacacccccccaaaaaaaccccccaaaaaahhhnnntttxxxyyyyyyvvvvqqmmmmdddcccc
abcccccccccccccccccccccaaaaccccaaaaaaccccccaaaaccccaaaaaaaaaaaaaaaacacccccccccccccccccccccccccccccccccccccaaaacccccaaccccccccccaaaaaaaccccccccaaaahhhnnnnttxxxyyyyyvvvqqqqmmmdddccccc
abcccccccccccccccaacaacaaacccccaaaaaaccccccaaaacccaaaaaaaaaaaaaaaaaaacccccccccccccccccaacaaccccccccccccccccaaccccccccccccccccccccaaaaaacccccccaaccchhhmmmttxwyyyyyyvvrqqqmmmddddccccc
abcccccccccccccccaaaacccccccccccaaaaacccccccccccaaaaaaaaaaaaaaccaaaaccccaacccccaacccccaaaaaccccccccccccccccccccccccccccccccaaaaccaaaaaacccccccaaccahhhmmssswwywwwyyyvvrqmmmmdddcccccc
abccccccccccccccaaaaacccccccccccaacaacccccccccccaaaaaacaaaaaacccaaaaaaacaaccccaaaccccccaaaaacccccccacccccccccccccccccccccccaaaaccaacccccccccccaaaaahhhmmsswwwwwwwwywwvrrnnmdddccccccc
abccccccccccccccaaaaaaccaaccccccccccccccccccccccaaaaaaaaaaaaacccacaacaaaaaccccaaacaaacaaaaaacaaacaaacccccccacccaaccccaaccccaaaacccccccccaaaccccaaaahhhmmssswwwwswwwwwwrrnnndddccccccc
abaaccccccccccccacaaaacaaaaaaaccccccccccaacccccccaaaaaaaacaaaccccccccaaaaaaaaaaaaaaaacaaaacccaaaaaaacccccccaacaaaaaaaaacccccaaccccccccccaaacccaaaaahhhmmsssswsssrrwwwrrrnneddaccccccc
abaaccccccccaaccccaaccccaaaaacccccccccccaacccccccaaaacccccccacccccccaaaaaaaaaaaaaaaaacccaaccccaaaaaacccccccaaaaacaaaaaaacccccccccccccaaaaaaaaaaaaaahhhmmssssssssrrrrrrrrnneedaaaacccc
abacccccccccaaaaccccccaaaaaaaccccccccaaaaaaaacccccccccccccccccccccccaaaaaaaacaaaaaacccaaacccccaaaaaaaacccccaaaaaacaaaaaaaccccccccccccaaaaaaaaaaaaaahhhmmmsssssllrrrrrrrnnneeeaaaacccc
abaaacccccaaaaaaccccccaaaaaaaacccaaccaaaaaaaaccccaaaaaccccccccccccccaaaaaacccaaaaaaccccaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaaccccccccccccccaaaaaccccaachhgmmmmmlllllllrrrrrnnneeeaaaacccc
abaaacccccaaaaaccccaccaaaaaaaacaaaaaaccaaaaccccccaaaaacccccccccccccccccaaacccaaaaaaaccaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaacccccccccccccccaaaaaaccccaaccgggmmmllllllllllnnnnneeeaaaaccccc
abcccccccccaaaaacccaaacaaaacaacaaaaaacaaaaaccccccaaaaaaccccccccccccccccccccccaaacaaacccaaaaaaaacaaaccccccccccaaccaaaaaacccccccccccccccaaaaaacaacccccgggggmlllfffflllnnnnneeeaaaaccccc
abcccccccccaaccacccaaaaaaacccccaaaaaacaacaaacccccaaaaaaccccccccccccccccccccccaccaaccaaaaaaaaacccaaaccccccccccaaccccccaacccccaaaaccccccaccaaaaaaccccccggggggggfffffflnnneeeeeacaaacccc
abaaaccccccccccccccaaaaaacccccccaaaaacacccaaaacccaaaaaacccccccccccccccccccaaacccaaccaaaaaaaaacccaaccccccccccccccccccccccccccaaaaccccaaaccaaaaaacccccccgggggggfffffffffeeeeeaacccccccc
abaaaaacccccccccccaaaaaaaaccccccaaaacccccccaaacccccaacccccccaaacccccccccccaaaacaaacccaaaaaaaacccccccccccccccccccccccccccccccaaaaccccaaacccaaaaaaacccccccccgccaaaafffffeeeeccccccccccc
abaaaaaccccccaaccaaaaaaaaaacccccaaacaaaaaacaaaccccccccccccaaaaaccccccccccaaaaacaaacccccaaaaaaacccccccccccccccccccccccccccccccaacccccaaaaaaaaaaaaaccccccccccccaaaacaafffecccccccccccaa
abaaaacccaaacaaccaaaaaaaaaacccccaaaaaaaaaaaaaaaaacccccccccaaaaaaccccccccccaaaaaaaaaaacaaacccacccaacccccccccaaaaccccaaacccccccccccaaaaaaaaaaaaaaacccccccccccccaaaccccaaccccccccccccaaa
abaaaaacccaaaaacccccaaacaaacccccaaaaaaccaaaaaaaaacccccccccaaaaaaccaaccacccaaaaaaaaaaaaaaaccccccaaacccccccccaaaaccccaaaaccccccccccaaaaaaaaaaaaaaccccccccccccccaaaccccccccccccccccccaaa
abaaaaacccaaaaaaacccaaaccccccccaaaaaaaaccaaaaaaaccccccccccaaaaacccaaaaaccccaaaaaaaaaaaaacccccaaaaaaaaccccccaaaaccccaaaacccccccccccaaaaaaacccaaaccccccccccccccaaacccccccccccccccaaaaaa
abcccccccaaaaaaaaccccaacccccccaaaaaaaaaaaaaaaaacccccccccccaaaaaccaaaaaacccccaaaaaaaaaaaaaccccaaaaaaaacccccccaacccccaaacccccccccccccaaaaaaacccccccccccccccccccccccccccccccccccccaaaaaa`;

const sample = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

let lines = input.split("\n");

let min = 'a'.charCodeAt(0);
let start = {};
let finish = {};
let map = [];
for (let i = 0; i < lines.length; i++){
    map.push([]);
    for (let j = 0; j < lines[i].length; j++){
        let sq = { letter: lines[i][j], elev: lines[i][j].charCodeAt(0) - min, visited: false, dist: -1, x: i, y: j };
        if (lines[i][j] === 'S'){
            sq.elev = 0;
            start = sq;
            sq.visited = true;
            sq.dist = 0;
        }else if (lines[i][j] === 'E'){
            sq.elev = 25;
            finish = sq;
        }
        map[i].push(sq);
    }
}


let toVisit = [start];
let iter = 0;
while (toVisit.length > 0){
    // check up
    let current = toVisit.shift();
    if (current.x > 0){
        let up = map[current.x - 1][current.y];
        if (!up.visited){
            if (up.elev <= current.elev + 1){
                up.visited = true;
                up.dist = current.dist + 1;
                toVisit.push(up);
            }
        }
    }
    if (current.x < map.length - 1){
        let down = map[current.x + 1][current.y];
        if (!down.visited){
            if (down.elev <= current.elev + 1){
                down.visited = true;
                down.dist = current.dist + 1;
                toVisit.push(down);
            }
        }
    }

    // check left
    if (current.y > 0){
        let left = map[current.x][current.y - 1];
        if (!left.visited){
            if (left.elev <= current.elev + 1){
                left.visited = true;
                left.dist = current.dist + 1;
                toVisit.push(left);
            }
        }
    }

    if (current.y < map[current.x].length - 1){
        let right = map[current.x][current.y  + 1];
        if (!right.visited){
            if (right.elev <= current.elev + 1){
                right.visited = true;
                right.dist = current.dist + 1;
                toVisit.push(right);
            }
        }
    }
    iter++;
}

// console.log(map);
console.log(start);
console.log(finish);

let mapstr = "";
for (let i = 0; i < map.length; i++){
    let line = map[i];
    for (let j = 0; j < line.length; j++){
        mapstr += line[j].dist.toString().padStart(3, "0");
        mapstr += " ";
    }
    mapstr += "\n";
}

//console.log(mapstr);
console.log('z'.charCodeAt(0) - 'a'.charCodeAt(0));