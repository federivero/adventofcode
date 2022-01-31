
var fs = require('fs');

fs.readFile('input_sample.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	console.log(lines);
	let line = lines[0];
	
});
