
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	console.log(lines);
	
	// find max row and column
	let commands = lines.map((l) => {
		let tokens = l.split(" -> ");
		let start = tokens[0].split(",");
		let end = tokens[1].split(",");

		return { x1: parseInt(start[0]), y1: parseInt(start[1]), x2: parseInt(end[0]), y2: parseInt(end[1]) };
	});


	let maxx = 0;
	let maxy = 0;
	for (let i = 0; i < commands.length; i++){
		let c = commands[i];
		maxx = Math.max(maxx, c.x1, c.x2);
		maxy = Math.max(maxy, c.y1, c.y2);
	}

	let map = [];
	for (let i = 0; i <= maxy; i++){
		map.push([]);
		for (let j = 0; j <= maxx; j++){
			map[i].push(0);
		}
	}

	for (let i = 0; i < commands.length; i++){
		let c = commands[i];
		if (c.x1 == c.x2){
			let y1 = Math.min(c.y1, c.y2);
			let y2 = Math.max(c.y1, c.y2);
			for (let y = y1; y <= y2; y++){
				map[y][c.x1]++;
			}			
		} 
		if (c.y1 == c.y2){
			let x1 = Math.min(c.x1, c.x2);
			let x2 = Math.max(c.x1, c.x2);
			for (let x = x1; x <= x2; x++){
				map[c.y1][x]++;
			}			
		}
	}

	/*
	for (let i = 0; i < map.length; i++){
		console.log(map[i].join(""));
	}*/

	let count = 0;
	for (let i = 0; i < map.length; i++){
		for (let j = 0; j < map[i].length; j++){
			if (map[i][j] >= 2){
				count++;
			}
		}
	}
	console.log(count);
});
