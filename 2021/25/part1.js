
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	//console.log(lines);
	let map = lines.map((l) => l.split(""));
	let otherMap = lines.map((l) => l.split(""));

	let width = map[0].length;
	let stepCount = 0;
	let step = 0;
	let finished = false;

	var copyMap = function(map){
		return map.map((l) => l.slice());
	}

	var printMap = function(map){
		for (let i = 0; i < map.length; i++){
			console.log(map[i].join(""));
		}
	}

	printMap(map);
	let somethingChanged = false;
	while (!finished){
		somethingChanged = false;
		// move > 
		for (let i = 0; i < map.length; i++){
			let line = map[i];
			let otherLine = otherMap[i];
			for (let j = 0; j < line.length; j++){ 
				let nextColumn = (j + 1) % line.length;
				if (line[j] == '>' && line[nextColumn] == '.'){
					otherLine[j] = '.';
					otherLine[nextColumn] = '>';
					j++;
					somethingChanged = true;
				}else{
					otherLine[j] = line[j];
				}
			}
		}

		map = copyMap(otherMap);

		// move v 
		for (let j = 0; j < width; j++){ 
		
			for (let i = 0; i < map.length; i++){
				let nextRow = (i + 1) % map.length;

				let line = map[i];
				let nextLine = map[nextRow];

				let otherLine = otherMap[i];
				let otherNextLine = otherMap[nextRow];
				if (line[j] == 'v' && nextLine[j] == '.'){
					otherLine[j] = '.';
					otherNextLine[j] = 'v';
					i++;
					somethingChanged = true;
				}else{
					otherLine[j] = line[j];
				}
			}
		}

		// switch variables
		map = copyMap(otherMap);

		if (!somethingChanged){
			finished = true;
		}

		step++;
		if (step == stepCount){
			finished = true;
		}
	}


	console.log( " ");
	printMap(map);

	console.log("ended in step:", step);
});
