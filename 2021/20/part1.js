
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	//console.log(lines);

	let table = lines[0];

	lines.splice(0, 2);

	let size = lines.length;

	let steps = 2;
	let pixelsPerStep = 3;

	let sizeEnlargement = steps * pixelsPerStep;
	let targetSize = size + 2 * sizeEnlargement;

	console.log(targetSize);
	let picture = [];
	for (let i = 0; i < targetSize; i++){
		picture.push([]);
		if (i < sizeEnlargement || i >= sizeEnlargement + size){
			for (let j = 0; j < targetSize; j++){
				picture[i].push("0");
			}
		}else{
			let line = lines[i - sizeEnlargement];
			for (let j = 0; j < targetSize; j++){
				if (j < sizeEnlargement || j >= sizeEnlargement + size){
					picture[i].push("0");
				}else{
					picture[i].push((line[j-sizeEnlargement] == "." )? "0":"1");
				}
			}
		}
	}

	var printPicture = function(picture){
		for (let i = 0; i < picture.length; i++){
			console.log(picture[i].join(""));
		}
	}

	var enhance = function(picture){
		let newPicture = [];
		for (let i = 0; i < picture.length; i++){
			newPicture.push([]);
			for (let j = 0; j < picture.length; j++){

				let pixelCode = "";
				for (let q = -1; q <= 1; q++){
					for (let k = -1; k <= 1; k++){
						let ti = i + q;
						let tj = j + k;
						if (ti >= 0 && tj >= 0 && ti < picture.length && tj < picture.length){
							pixelCode += picture[ti][tj];
						}else{
							pixelCode += picture[0][0];
						}
					}
				}

				let pixelIndex = parseInt(pixelCode, 2);
				let newPixel = table[pixelIndex] == "."? "0":"1";

				newPicture[i].push(newPixel);
			}
		}

		return newPicture;
	}

	picture = enhance(picture);
	picture = enhance(picture);
	printPicture(picture);

	// count lit
	let count = 0;
	for (let i = 0; i < picture.length; i++){
		for (let j = 0; j < picture[i].length; j++){
			if (picture[i][j] == "1")
				count++;
		}
	}
	console.log(count);
});
