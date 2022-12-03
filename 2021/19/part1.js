
var fs = require('fs');

fs.readFile('input_sample.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	//console.log(lines);
		
	let scanners = [];
	let scanner = null;
	for (let i = 0; i < lines.length; i++){
		let line = lines[i];
		if (line.indexOf("--- scanner ") == 0){
			scanner = { grouped: false, n: parseInt(line.substring(12,13)), beacons: [], positions: { x: null, y: null, z: null } };
			scanners.push(scanner);
		}else if (line.length > 0){
			let beacon = {};
			let pos = line.split(",");
			pos = pos.map((p) => parseInt(p));
			beacon.x = pos[0];
			beacon.y = pos[1];
			beacon.z = pos[2];
			scanner.beacons.push(beacon);
		}
	}
	
	let stepCount = scanners.length - 1;
	// on each step we'll merge one scanner
	for (let steps = 0; steps < stepCount; steps++){

		assemble:
		for (let i = 0; i < scanners.length; i++){
			let scan1 = scanners[i];
			for (let j = 0; j < scanners.length; j++){
				if (i != j){
					let scan2 = scanners[j];

					// merge scanners
					// (rotate all positions)
				}
			}
		}
	}
	console.log(scanners);
});
