
let input = `target area: x=265..287, y=-103..-58`

let line = input;
line = line.substring(13);
line = line.split(", ");
line[0] = line[0].substring(2);
line[1] = line[1].substring(2);
line[0] = line[0].split("..");
line[1] = line[1].split("..");
let targetArea = { x1: parseInt(line[0][0]), x2: parseInt(line[0][1])};
targetArea.y1 = parseInt(line[1][0]);
targetArea.y2 = parseInt(line[1][1]);

/*
// calculate possible x speeds
// the fastest it can start is with speed targetArea.y2
let xspeeds = [];
for (let i = targetArea.x2; i >= 0; i--){
	let finished = false;
	let x = i;
	let dist = x;

	let xspeed = { speed: x, steps: [], allAbove: false };
	let step = 1;
	while (!finished){
		if (dist >= targetArea.x1 && dist <= targetArea.x2){
			xspeed.steps.push(step);
			if (x == 0){
				xspeed.allAbove = true;
			}
		}else if (dist > targetArea.x2){
			finished = true; // overshoot
		}
		step++;
		x--;
		dist += x;
		if (x < 0){
			finished = true;
		}
	}
	if (xspeed.steps.length > 0)
		xspeeds.push(xspeed);
}

console.log(xspeeds);
*/

let maxXspeed = targetArea.x2;
let maxYspeed = (targetArea.y1 * -1) - 1;
let minYSpeed = targetArea.y1;
let possiblePairs = [];

let printi = 9;
let printj = 1;
for (let i = maxXspeed; i >= 0; i--){
	for (let j = maxYspeed; j >= minYSpeed; j--){
		let xSpeed = i;
		let ySpeed = j;

		// simulate
		let x = 0;
		let y = 0;
		let step = 0;
		let finished = false;

		if (i == printi && j == printj)
			console.log("simulation started for: ", i, j);
		while (!finished){
			x += xSpeed;
			y += ySpeed;
			if (i == printi && j == printj)
				console.log(x, y, xSpeed, ySpeed);

			if (x >= targetArea.x1 && x <= targetArea.x2 && y >= targetArea.y1 && y <= targetArea.y2){
				finished = true;
				possiblePairs.push({ x: i, y: j });
				if (i == printi && j == printj)
					console.log("found!");
			}else{
				if (y < targetArea.y1){
					finished = true;
				}
			}

			step++;
			ySpeed -= 1;
			if (xSpeed > 0){
				xSpeed -= 1;
			}else if (xSpeed < 0){
				xSpeed += 1;
			}
		}

	}
}

// console.log(possiblePairs);
console.log(possiblePairs.length);
console.log(targetArea);
