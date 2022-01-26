
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let mapMutiplier = 5;
	let lines = data.split("\r\n");

	let nodesData = [];

	let baseHeight = lines.length;
	let baseWidth = lines.length;

	let height = lines.length * mapMutiplier;
	let width = height;

	for (let i = 0; i < height; i++){
		let line = lines[i % lines.length];
		let riskAddI = Math.floor(i / baseHeight); 
		for (let j = 0; j < width; j++){
			let riskAddJ = Math.floor(j / baseWidth); 

			let baseRisk = (parseInt(line[j % lines.length]) + riskAddI + riskAddJ);
			baseRisk = ((baseRisk - 1) % 9) + 1;

			nodesData.push({ risk: Infinity, marked: false, baseRisk: baseRisk, 
					x: j , y: i });
		}
	}	

	nodesData[0].risk = 0;

	let totalNodes = nodesData.length;
	let finished = false;
	let visitedNodes = 0;

	let currentNodeX = 0;
	let currentNodeY = 0;

	var calculateLinearIndex = function(x, y){
		return x + y * width;
	}

	let currentNode = 0;

	var count = 0;
	while (!finished){

		let adjacentNodeIndexes = [];
		if (currentNodeX > 0)
			adjacentNodeIndexes.push({ x: currentNodeX - 1, y: currentNodeY});
		if (currentNodeY > 0)
			adjacentNodeIndexes.push({ x: currentNodeX, y: currentNodeY - 1});
		if (currentNodeX < width - 1)
			adjacentNodeIndexes.push({ x: currentNodeX + 1, y: currentNodeY});
		if (currentNodeY < height - 1)
			adjacentNodeIndexes.push({ x: currentNodeX, y: currentNodeY + 1});
		
		currentNode = calculateLinearIndex(currentNodeX, currentNodeY);
		nodesData[currentNode].marked = true;

		let currentNodeCost = nodesData[currentNode].risk;

		for (let i = 0; i < adjacentNodeIndexes.length; i++){
			let nextNodeIndexes = adjacentNodeIndexes[i];
			let nextNode = calculateLinearIndex(nextNodeIndexes.x, nextNodeIndexes.y);
			nodesData[nextNode].risk = Math.min(currentNodeCost + nodesData[nextNode].baseRisk, nodesData[nextNode].risk)
		}

		visitedNodes++;

		finished = (visitedNodes == totalNodes);
		if (!finished){

			// this is very inefficient but it's better than sorting every time
			// should've kept another array and used insertion sort each time
			// one of the values changes
			let min = null;
			for (let i = 1; i < nodesData.length; i++){
				if (!nodesData[i].marked){
					if (min == null){
						min = nodesData[i]; 
					}else if (min.risk > nodesData[i].risk){
						min = nodesData[i];
					}
				}
			}

			currentNodeX = min.x;
			currentNodeY = min.y;		
		}

		console.log(count++);
	}

	let index = calculateLinearIndex(width - 1, height - 1);
	let finalNode = nodesData[index];
	console.log(finalNode);

});


