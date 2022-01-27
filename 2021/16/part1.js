
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {

	if (err){
		console.log(err);
		process.exit(1);
	}

	let lines = data.split("\r\n");
	console.log(lines);

	var binary = [];

	var data = lines[0]; // just one line of data
	for (let i = 0; i < data.length; i++){
		let hexa = data[i];
		let num = parseInt(hexa, 16);
		let bin = num.toString(2).padStart(4, "0");
		for (let b = 0; b < bin.length; b++){
			binary.push(bin[b]);
		}
	}

	var getRawBits = function(binary, count){
		return binary.splice(0, count);
	}

	var getBits = function(binary, count){
		return parseInt(binary.splice(0, count).join(""), 2);
	}

	var decodePacket = function(binary){
		var packet = {};

		let versionNumber = getBits(binary, 3);

		let typeId = getBits(binary, 3);
		packet.versionNumber = versionNumber;
		packet.typeId = typeId;

		if (typeId == 4){ // literal value
			packet.type = 'literal';

			let decodingLiteral = true;
			let literalValue = 0;
			while (decodingLiteral){
				decodingLiteral = getBits(binary, 1);
				let value = getBits(binary, 4);
				literalValue = (literalValue << 4) + value;
			}
			packet.value = literalValue;
		}else{
			packet.type = 'operator';
			let modeId = getBits(binary, 1);

			packet.subpackets = [];
			packet.modeId = modeId;
			if (modeId == 0){ // total length
				let totalLength = getBits(binary, 15);
				let subpacketsBinary = getRawBits(binary, totalLength);
				packet.subpacketLength = totalLength;
				while (subpacketsBinary.length > 0){
					let subpacket = decodePacket(subpacketsBinary);
					packet.subpackets.push(subpacket);
				}
			}else if (modeId == 1){ // packet count
				let subpacketCount = getBits(binary, 11);
				packet.subpacketCount = subpacketCount;
				for (let i = 0; i < subpacketCount; i++){
					let subpacket = decodePacket(binary);
					packet.subpackets.push(subpacket);					
				}
			}
		}

		return packet;
	}

	let decodingPackets = true;
	let i = 0;


	let packets = [];
	while (decodingPackets){

		var packet = decodePacket(binary);		
		packets.push(packet);
		decodingPackets = binary.length >= 8;

	}
	
	var countVersionNumber = function(packet){
		let count = packet.versionNumber;
		if (packet.subpackets){
			for (let i = 0; i < packet.subpackets.length; i++){
				count += countVersionNumber(packet.subpackets[i]);
			}
		}
		return count;
	}

	// count version sum
	let totalVersionNumber = 0;
	for (let i = 0; i < packets.length; i++){
		let packet = packets[i];
		totalVersionNumber += countVersionNumber(packet);
	}

	console.log(totalVersionNumber);
});
