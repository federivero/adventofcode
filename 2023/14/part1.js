const input = `#...#..O#.OO...#......#...O.#.O#.O........O#..O#.O.OO..O.......O....##..O#O.........#O....O..O#.....
OO..O....#.####...#.O..#.....OO.O...O.#OOO.##..O.#.OO.#....O.#....#..#.O#..O#.O...#OO.#....#.O.#...O
..........O..#..OO.O...##.O........O#O#.#...#O....O.........O.....OO#....O..............#......#...#
#..O.O.#OO#....O#OO.#.#.O..O#...#.OO#.O#.O......#.....OO...O#.O....O..#.O#..#..O.#.O........#..#..O#
...#..O#.OO..#O...#..#..O###.........#.....OOOOOO.........#O.O.O#O.O.......O........#.OO....O..#...O
..OO...O.#.......#.#O....#..O##....O.O..OOO...#O.#..O.#O...#.O..O..#O#.#OO...O.OO..#..O..O.O.O....O#
.OO#............O.O...#.OO.#..##O......OO...#......##......#.#..#.O..O.O...#..#...O#......O..OOO....
..........O..#O...O.#....OOO.#........#.##O.#......#..###O...O...O..O.#.O..O.#..O.O.O.O.##.....#.#..
.##.O#O.........O.#.OOOO..O..O#.#..O.O...O..#......O.O.#O........O..#.#..#OO...#......##O.#O..O.OO..
.O.O.O##...O...O.........O##O##....#O....O#...OO.O.#..#O....OO...O.O.....##.....#..O#O#.#...O..O..#.
..OO#.#O.#...............#...#.#.O..#..O.#.#..O.##O..OOO..#O#....##.#.#...#.#.O#.#.O..#.#......#....
.#...#.#....O..O.#..O.O..O.....##O#..#.##..OO.....OO.OO..OO...O#...O.O...O.OO##.....O..............O
.....O.....#........#O..#.OO#..O...#O....OO..O.#.OOO.#O.O......#O.#.....#O..O..O#..#.#.#.O..O.#...OO
#.....#..OO.#....#.##.O.##..O.#.O#.O...O...#O.#.O#..O.#...##....OO#OO......#.O...O.O#.#...O...##.OO#
O.......O......O..O...#...#..#...##.##..O...O....O.##.#.#OO#.....#.O#...O.##O...O..........#..##.O.O
..............OO.O##.....#.O......##O#....O.O....O..##.#.............O#...O.#OO...O....#...O..O#..OO
.#O#...OO...#.#.....O#...O#.O.O#..O..##O.#.#..OO.O.##.#......O..O.O.O...#......OO#.#.#.#.O.OOO#.O.O.
..#...#..O.........O.O.O..O.........#..#....#.O#..#O...............O##.O##O.O..O#.#....O.#OO.#.#....
..#.#OO.OO..OO#..#O..O##.....O......OO..O.#..O#.......O..##..##.O.O..O.#O....O.O.......O....O....#.#
....OOOOO.#.#......#.........#.O.O....O....#.O..O#.....O##..........#..#.....O..O.....O....O.#O.#...
OOO.O#..#...O#...O.#..OOO.#.....O..#.O#.O.O.O.#O..#...#...#O....O.#..O..#O..O.#O#.OOOO..............
.#.O#OO#..##...O.#..O.O....#O........#O.....O..O....O.....#...#O.O..........#.......OO#...O..OO.##.O
OO.....O#.O....O..O.O.#.#O#.......#..##...O.......O...OOO...#...#OO.OO#....O#........OO.OO..OO....##
..O..#..#.#.O..O...#.#.#.O......O....O...#....#...#O.....O.#.#O.O..O#......OO.O...#.#OO.#...O.O.O..#
.#.O#.O.....O..OO...O..O..#....O#..O..O#....#......O#O....OO....#...O#O....#........O.O##..O....#...
#.OOO#..##..O#.#....#.O##..#......O#..OO.....O.....O..OO..#..OO..O..#..#...O.....#.#..O.O.O..#.O...#
#.O.#..#.....O.....#O.O...##.O....OO...OO.#....O.#.........O.O#.#....#.#......O....O..O....#.O....#O
.#O...O.O....OO#.....O......#...O#..#.O#.O....#...O.O#..O...O...........#......#.##...OO......OO##..
........#.#O......#O..#OO....O......#.O.#O#O...O...#O....O...O.........O..OO..##...O.#.#OO#.....##.O
.#.OOO.....#...#..O#....#.O....OO.O.O..OO..#.O..OOO.#....O.#..#O#O.#...O.#...O......#.O.O#O...O.OO..
.#..#.O#...O....O....O...#.O..#.O...##.##O.O....O..#.#.#.O..#.O.OO..O...#..O#...##.O.....O...O....#.
...##...#.##OO.O.O...O...#...##.O..#OOO..#.OO#..O..O....O.O#.#.#O..##.O...O.O..O...O......#.......O.
.##.#O..#....O........O..O.O..##...#...#O#...O.....O##.#..#.O........O........O##....#....#.O..O...O
O.#.O..O..#..#O.##O.......O.O...O#.O......OO.O.O....O..#.O...#O.O..#..O....O..#..OO#.#.O#..#.#..#.#.
...................OO.#O..O...#.O...O...O.O#....#....O.OO.#O.O#.#.O#O.O#.#..O...OOOO..#..O...O.#..#.
#.....#....#OO..O...O#..#.##....#.#..#.#O..#.O.O....#.#O.........##OOO...OO...O..#.##.O#..O.#....#..
O..#.##....O##.....O.......O.#...#...#.##.....OO.O..O#.#O.#....#.....#.....#.....O.....#............
#..#..#...O.#....#......O...#...#.#O.........#O#.#O...O...O...#.#.......#O...............O#....O....
##.#..OO..OO#...#.OO.....#....O#O...O.O.O.#....#......O...O#..OO.O..#.#...O.#O...O...#........O.O.O#
O.#...O..#.#.O...#O..O#..O.#..O#O#OOO.......#..#O..#....O#...O.O...O....O.............OO..O..O#.#...
O##.OO....#..#.....O..O..#..O.#...O..OO.......#...#.#....#...##.#.....#..#..OO#O.#..OO..O#..#..#...O
#.O.#...#O.#...#.OO.OO..##.#...#.....O#.O#O.OO.........O...O..O.O...#.........O......OO..#..O...#O..
.....#....O.##..O#..O.....#.O.....O...O.OO#OO.O......O..O..O.....#.#...#.O..#...O.O#.OOO.O.#....O...
..O...#....O....#.O.O#.#.#.O.OOO........O..OO..O##.....##.....#.O.......#....#.#O.O.#..#.O...#..#..O
O#...O...##.#.#..O#O#......#.O..#....O...OO.#...#.OOO##..O.O#.#.#..O#OO.OO###.....O..#...#O.#..O....
O.OO..#...O..O......O.#....O.O##....O.#O.O.O###..O...#..#.....#....O###..#...#O.OOO..O.#O.....#.....
#O....#....O..O..O#.O.OOO...O.OOO......#....O.##O##O....#.OO..O#..#......O#.........#.#...OO...O....
.#..OO.....O..#....O..........O..O.O..O.##...O.O.O.#.O.#...#O..#....O.#........#.#..O.##....#O##.#.#
.OO.......O..O#.O..#OOO.O...#.#.O#.##....#.O..#.#.O.OO......#O##.O...........OO..#.......#...O#.....
....#......#..........#.#.O..O.....#...O....O.O.OO#.#......O..#.#O..OO..OO#.O#.#O#.O..O.O......#...#
O.O.O..#O#......O.#O..#####...O.....#.O..#..O.........O...##.#O.....##.....#..#.....O.#...#O.#O#OO.O
.....O..O#...O..#...O.......O..###O...O..O...OO.O...O..O#OO.....O#.O.#.O......#........O.O.O..OO#.O.
.O...#.O....O#OO...OO#.#.......OO.....#.#.....#O..#..#.#.#O#..#.O.O.....##.#.#.#...#O...O......O....
.#..#.OO....O.#..O..O..O...O..........O.#.OO..#..O............O#.O.#.O#...OO...O#.O.O.###.#O.#..O.O.
..#O...#..#..O....#............O..#.O....#...O...#.....O..##.##OO#....#...O#.O.O....OO#O..##..O...#O
..OO.#O#....O..#..#..O.#O..O....O.........#.O...#.O....##..#.O........O....O...#.OO..#........O.OOO.
.O..#.OOO.O.O..O...#O..#..OO.....##....#..#..O.OO#O...#.O...#.....O#..##.##.#.....O..O....O..#O..OO.
...#.O.#.#.....O...#....O..O..##OO.........O.#..O..O......O#.#....O.O..O..O.......O.#.#..#...##...O.
..O....##...O...O.#OOOO.O..#.....OO.O.......#O..O..#..O...#....OO....O...##.#....##....O...O...O##.O
O..O#.....#O...O...#O...#...O.....#......O...#..#O............#.###O.....O.....O.O.#..#OOOO...#O#...
O.O...OO.##....#....#.#.#O....O.#.#..O..O..O.....OOO#.#.......#.....O...O...O...#..#....OO.#.O.....#
..#.#.O.O...O..#..O#..O..#..#.OO..##......#OO#....#.O.O.O##..O...O#..#O.........OO.#...OO.O.O.OOO...
.......O.O..#.......O.O..#.O#..#...O.......O....O....##OOOO..#....#.#....#.....#O#....#.....O..OO.#.
O..#OO..#.##.......##..O..O.#..O.O##.....OOO#..#....#..O.O..O....#..O.O.....#O..#.OO..O#....#.#.....
OOO..O.....##....O..#.O.#...O##OOOOO....O.#..O.O#.O..##O.O#OO...O........O.O..O..O..#.O..OOO..#.O.OO
...O.O.O..OOO..O..#...#..O...##O#OO.OO..O.........O.....O#O.O.O....#..O#.O#..O.O.O.#.#O##O..#.......
OO....O...OO..#..#OO..#......#.O.OO.O.O.#.......#OO........OO...#..O...##..O.....O...O.O#O.O.O#OO...
O...O#.OO.....O.O.O...#O.O..O#O........#O.#....#...#.O.#...OOO#..........O.....O...##.....O#O.#.O##.
...O....#.O......OO......##..O..O.O....##........O.....#....##...##..#........#..##..O....O.O.#..O#O
..##.O....#.O##.OO#O....#OO#OO....O#.O......##..##.O..OO.O...O....O...OO....#.O..O....O#..#...#....O
.###....#OOO...#....OOO.#..#....O.O#.......#............O......#...#..##..O#..O..O.##.O...O#....O...
..##O..#OO#...O....##.O..#...O.....#.O..O.O.....O..#O#O...##.#O.#....#OOO..O....O....#...OOO.#O..##.
.O.O......#OO.......#.O.....#...OOO.O.O.#.O..#.O..##.O..O..O...O.#O##.O....#......#.O.#......#....O.
##......O.OO..O#.#O.###O....#...O#......##.......O.OO#O.....O....OO.........#....O.#.O.......O#...#.
.O.....##..#....#.O.....O.#..OO...#O...#.#...##....O....#OO.#.O.#O.....#O.O.O#O.OO.....#...OO#...O.O
.O#....OO.OO..O..OO.O....##...#..OO.O....O...O.O..O..O..O..#OO...#O...O...O.OO#...O.O.....#O....O...
#O......O#....OO###.O...O##...#.........O.....O..##.##....O......O##....#...#..O...O.O.......O...###
.....O##O..O..####.#O.OO..#..#..OO.#O.....O...O####.#......#..O....O.#.#......OOOOO.O.O...#.##......
O##.#..#..#.#..#.#....#......OO#...O..O#..OO.#O.....O.........O#..#.......#.....##...#O#.#O..OO.....
.O..O#O..#.OO.O....O..##O......O.##...O...#.O#.........O...O.O...O.#...OO.........#...#..#OO#.#....#
........O#....OO.#.O..O...OO#O..OO#OOO.O#.#.#O..#.....O.OO...O...OO.#..O..O....##..O#...OOO.O.##.O..
..#.O....##O.O.#.#....O.#.O.#...OO.O.....#..O.....O....##.......O#.......O.#..O.#.O#.O.O..##......O.
#O#O.#...OOOO..OOO.O###....OO....#.O..OOO#..O...#....O.....O..OO.#.O..O###.O...O..#.#...OO...O......
......O#.O..#.O.......OOOO..#.O........O.#O##.#.#O#O.....O.#O....#...O...OO.O......OO........O.#..#.
O..#..O..##..O.O....#....#..#O...OOO.OO.#O...#.........O..#..O........O#....O.#O#.#O.OO.......O.....
..O.OO#..O..O......O...OO...#.....#.....O......O.....O..#....#.....O.O..O#..O.#...#...#O..#..O..O...
O.#..O.#O.OO.O#..OO...O#O..OO..O...#.O..#O..#...O....OO#..OO.....OOOO...#O...O#O..OO.........#......
....O.O#.#......O.O#....O#.......#....#.#.#O.#O...O#O.#..#.#.OO........O.#.#O....O#.......#..OO#O.O.
...O...O..###..#......#.#.O..O....OO##..##OO.......O...O#..OO#OO..#..O........O...#.#.#O.....#O#OOOO
...O..O.O#.O.#......O.#OO..OO.O....O.O....#.#O#.O.....O.....O..O.#.OO.....O...O.......O....O.#....O.
#..O....O.O.O#..O..#..........#O...##..OO.#.O.O#O...#..O...#.......O.........O....O#O#O.O.O.#.OO.OO#
O...#.....O..O#.#O...O...O.##..#O..#.##.O...O##.#O...O..O..O#....#.O..#O##..#...O.O.O..##..OO.O....O
#.....#.O....O......OO...OO.#.O..O#..O.O#O......#O...#.#..O.#...#.O.#..#..#....O.O....OOO#..O.......
#....#...O#.....O..O.#...O.O..O#..#.O.O.#...#.O..O#.......O......O..O....O....##OO.#O....##.OO....#.
O...O.O..#..O#..#O.....#.#.O#O.O......#OOO...OO........O#.O.....#..#.#..#.O.#....#.......OO.#....#O.
OO.##.#O...#.O.....O..#.#...#OO......##O......O..###...#.......O#.OO..O...#.#.....O.O......O##......
#.O....OO.O.OO.....OO..O...........O..O..#OO#...O#....OO.O.......#.#.OO..OO.OO.#.O...O.#O.O........#
..##...O.O.O.O.O...OO.O...O..O.#.#......O.#.#.O.....#.O...O#..O.##O...#....O..#...O.OO.........O#.#.
.....OOO#O#OO.O...#......#.O..##OOO#.#.#O.O.#O..#O..O..##O.#.#.....#.....#.#...OO.......O#...O....O#
O..##.##...O...O.O#..#....O..O.....O#O#O#O#O....#.O.#O..#....O.O...O..O.#...O.OO..O..O.O#..#O##.#O.O`

const test = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....` 

let map = input.split("\n").map((l) => l.split(""));
let h = map.length;
let w = map[0].length;


let rocks = [];
map.map((l, row) =>{
    l.map((dot, column) =>{
        if (dot === 'O'){
            rocks.push({ r: row, c: column });
        }
    });
})
// keep rocks with chance of moving
rocks = rocks.filter((r) => r.r !== 0);
let rocksMoving = true;
while (rocksMoving){
    rocksMoving = false;
    
    for (let i = 0; i < rocks.length; i++){
        let rock = rocks[i];
        let startR = rock.r;
        while (rock.r > 0 && map[rock.r - 1][rock.c] === "."){
            rock.r--;
        }
        if (rock.r < startR){
            map[startR][rock.c] = '.';
            map[rock.r][rock.c] = 'O';
            rockMoved = true;
        }
    }   
}

// console.log(map.map((l) => l.join("")).join("\n"));

rocks = [];
map.map((l, row) =>{
    l.map((dot, column) =>{
        if (dot === 'O'){
            rocks.push({ r: row, c: column });
        }
    });
})

let sum = 0;
for (let i = 0; i < rocks.length; i++){
    sum += h - rocks[i].r
}

console.log(sum);
