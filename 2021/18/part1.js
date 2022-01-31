
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	//console.log(lines);
	
	let numbers = [];
	let currentNumber = null;
	for (let i = 0; i < lines.length; i++){

		let line = lines[i];

		let numberStack = [];
		currentNumber = null;
		for (let j = 0; j < line.length; j++){
			let char = line[j];
			if (char == "["){
				if (currentNumber){
					numberStack.push(currentNumber);
				}
				currentNumber = {};
			}else if (char == "]"){
				let parent = numberStack.pop();
				if (parent){
					if (parent.left != undefined){
						parent.right = currentNumber;
					}else{
						parent.left = currentNumber;
					}
					currentNumber = parent;					
				}
			}else if (char != ","){
				let num = parseInt(char);
				if (currentNumber.left != undefined){
					currentNumber.right = num;
				}else{
					currentNumber.left = num;
				}
			}
		}

		numbers.push(currentNumber);
	}

	var isNumber = function(obj){
		return !isNaN(obj);
	}

	var magnitude = function(number){
		let magn = 0;
		if (isNumber(number.left)){
			magn += 3 * number.left;
		}else{
			magn += 3 * magnitude(number.left);
		}
		if (isNumber(number.right)){
			magn += 2 * number.right;
		}else{
			magn += 2 * magnitude(number.right);
		}
		return magn;
	}

	var addSingle = function(target, value, direction){
		if (direction == "left"){
			if (isNumber(target.left)){
				target.left = target.left + value;
			}else{
				addSingle(target.left, value, direction);
			}
		}else if (direction == "right"){
			if (isNumber(target.right)){
				target.right = target.right + value;
			}else{
				addSingle(target.right, value, direction);
			}
		}
	}
	var explode = function(number, nestings){
		if (nestings == 4){
			return { value: number, changeNumber: true, addLeft: true, addRight: true };
		}else{
			let result = null;
			if (!isNumber(number.left)){
				result = explode(number.left, nestings + 1);
				if (result && result.changeNumber){
					result.changeNumber = false;
					number.left = 0;
				}
				if (result && result.addRight){
					if (isNumber(number.right)){
						number.right = number.right + result.value.right;
					}else{
						addSingle(number.right, result.value.right, "left");
					}
					result.addRight = false;
				}
			}
			if (!result){
				if (!isNumber(number.right)){
					result = explode(number.right, nestings + 1);
					if (result && result.changeNumber){
						result.changeNumber = false;
						number.right = 0;
					}
					if (result && result.addLeft){
						if (isNumber(number.left)){
							number.left = number.left + result.value.left;
						}else{
							addSingle(number.left, result.value.left, "right");
						}
						result.addLeft = false;
					}
				}
			}
			return result;
		}
	}

	var split = function(number){
		let splitted = false;
		if (isNumber(number.left)){
			if (number.left >= 10){
				number.left = { left: Math.floor(number.left / 2), right: Math.ceil(number.left / 2) };
				splitted = true;				
			}
		}else{
			splitted = split(number.left);
		}
		if (!splitted){
			if (isNumber(number.right)){
				if (number.right >= 10){
					number.right = { left: Math.floor(number.right / 2), right: Math.ceil(number.right / 2) };
					splitted = true;					
				}
			}else{
				splitted = split(number.right);
			}	
		}
		return splitted;
	}

	var reduce = function(number){
		let finished = false;
		//console.log("reduction");
		while (!finished){
			let exploded = explode(number, 0);
			//console.log("after explode", stringify(number));
			if (!exploded){
				let splitted = split(number);
				//console.log("after split", stringify(number));	
				if (!splitted){
					finished = true;
				}
			}
		}
		return number;
	}

	var stringify = function(number){
		let string = "";
		if (isNumber(number)){
			string = number;
		}else{
			string = "[" + stringify(number.left) + "," + stringify(number.right) + "]";
		}
		return string;
	}

	let result = numbers[0];
	let sumCount = numbers.length;
	for (let i = 1; i < sumCount; i++){
		let sum = { left: result, right: numbers[i]};
		console.log("sum", stringify(sum));
		result = reduce(sum);
		console.log("result", stringify(result));
	}

	console.log(magnitude(result));
});
