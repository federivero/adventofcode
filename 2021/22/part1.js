
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let commands = data.split("\r\n");

	commands = commands.map((c) => {
		c = c.split(" ");

		var comm = {};
		comm.type = c[0];

		var axis = c[1].split(",");
		axis[0] = axis[0].substring(2);
		comm.x1 = parseInt(axis[0].split("..")[0]);
		comm.x2 = parseInt(axis[0].split("..")[1]);

		axis[1] = axis[1].substring(2);
		comm.y1 = parseInt(axis[1].split("..")[0]);
		comm.y2 = parseInt(axis[1].split("..")[1]);

		axis[2] = axis[2].substring(2);
		comm.z1 = parseInt(axis[2].split("..")[0]);
		comm.z2 = parseInt(axis[2].split("..")[1]);
			
		return comm;
	});

	//console.log(commands);
	
	let minx = -50;
	let maxx = 50;
	let miny = -50;
	let maxy = 50;
	let minz = -50;
	let maxz = 50;
	/*
	for (let i = 0; i < commands.length; i++){
		let c = commands[i];
		minx = Math.min(minx, c.x1, c.x2);
		maxx = Math.max(maxx, c.x1, c.x2);
		miny = Math.min(miny, c.y1, c.y2);
		maxy = Math.max(maxy, c.y1, c.y2);
		minz = Math.min(minz, c.z1, c.z2);
		maxz = Math.max(maxz, c.z1, c.z2);
	}*/

	let map = [];
	for (let i = minx; i <= maxx; i++){
		map.push([]);
		let x = i - minx;
		for (let j = miny; j <= maxy; j++){
			map[x].push([]);
			let y = j - miny;
			for (let k = minz; k <= maxz; k++){
				map[x][y].push(0);
			}
		}
	}

	for (let comm = 0; comm < commands.length; comm++){
		let c = commands[comm];
		minx = Math.max(-50, c.x1);
		maxx = Math.min(50, c.x2);
		for (let i = minx; i <= maxx; i++){
			let x = i + 50;
			miny = Math.max(-50, c.y1);
			maxy = Math.min(50, c.y2);

			for (let j = miny; j <= maxy; j++){
				let y = j + 50;

				minz = Math.max(-50, c.z1);
				maxz = Math.min(50, c.z2);

				for (let k = minz; k <= maxz; k++){
					let z = k + 50;

					if (c.type == 'on'){
						map[x][y][z] = 1;
					}else if (c.type == 'off'){
						map[x][y][z] = 0;						
					}else{
						console.error("error!");
					}
				}	
			}
		}
	}

	let oncount = 0;
	for (let i = -50; i <= 50; i++){
		let x = i + 50;
		for (let j = -50; j <= 50; j++){
			let y = j + 50;
			for (let k = -50; k <= 50; k++){
				let z = k + 50;
				if (map[x][y][z] == 1)
					oncount++;
			}
		}
	}

	console.log(oncount);
});
