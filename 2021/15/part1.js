
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");

	let nodesData = [];

	let height = lines.length;
	let width = 0;
	for (let i = 0; i < lines.length; i++){
		let line = lines[i];
		width = line.length;

		for (let j = 0; j < line.length; j++){
			nodesData.push({ risk: Infinity, marked: false, baseRisk: parseInt(line[j]), x: j, y: i });
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
			let nodes = nodesData.filter((n) => !n.marked);
			nodes.sort((n1, n2) => {
				return n1.risk - n2.risk;
			});

			currentNodeX = nodes[0].x;
			currentNodeY = nodes[0].y;		
		}
	}

	let finalNode = nodesData[calculateLinearIndex(width - 1, height - 1)];
	console.log(finalNode);
});


