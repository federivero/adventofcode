
var fs = require('fs');

fs.readFile('input_sample.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	/*
	let lines = data.split("\r\n");
	console.log(lines);
	let line = lines[0];
	line = line.substring(13);
	line = line.split(", ");
	line[0] = line[0].substring(2);
	line[1] = line[1].substring(2);
	line[0] = line[0].split("..");
	line[1] = line[1].split("..");
	let targetArea = { x1: parseInt(line[0][0]), x2: parseInt(line[0][1])};
	targetArea.y1 = parseInt(line[1][0]);
	targetArea.y2 = parseInt(line[1][1]);

	
	console.log(possibleXSpeeds);
	*/

	// super easy math problem. 175 is part of the input
	let speed = 175;
	let sum = 0;
	for (let i = 0; i <= 175; i++){
		sum += i;
	}
	console.log(sum);
});
