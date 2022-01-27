
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

			let bits = "";
			while (decodingLiteral){
				decodingLiteral = getBits(binary, 1);
				let value = getBits(binary, 4);
				bits = bits + value.toString(2).padStart(4, "0");
			}
			packet.bits = bits;
			packet.value = parseInt(bits, 2);

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
	let calculateExpression = 0;

	packet = packets[0];

	var calculatePacketValue = function(packet){
		if (packet.type == 'literal')
			return packet.value;

		var value = 0;
		switch (packet.typeId){
			case 0:
				// sum
				for (var i = 0; i < packet.subpackets.length; i++){
					let packetValue = calculatePacketValue(packet.subpackets[i]);
					
					value += packetValue;
				}
				break;
			case 1: // multiplication
				value = 1;
				for (var i = 0; i < packet.subpackets.length; i++){
					value = value * calculatePacketValue(packet.subpackets[i]);
				}
				break;
			case 2: // min
				value = Infinity;
				for (var i = 0; i < packet.subpackets.length; i++){
					value = Math.min(value, calculatePacketValue(packet.subpackets[i]));
				}	
				break;
			case 3: // max
				for (var i = 0; i < packet.subpackets.length; i++){
					value = Math.max(value, calculatePacketValue(packet.subpackets[i]));
				}
				break;
			case 5: // greater than
				var val1 = calculatePacketValue(packet.subpackets[0]);
				var val2 = calculatePacketValue(packet.subpackets[1]);
				if (val1 > val2)
					value = 1;
				break;	
			case 6: // less than
				var val1 = calculatePacketValue(packet.subpackets[0]);
				var val2 = calculatePacketValue(packet.subpackets[1]);
				if (val1 < val2)
					value = 1;
				break;	
			case 7: // equal
				var val1 = calculatePacketValue(packet.subpackets[0]);
				var val2 = calculatePacketValue(packet.subpackets[1]);
				if (val1 == val2)
					value = 1;
				break;								
		}
		return value;
	}
	console.log(calculatePacketValue(packet));

	//console.log(packet);

	//console.log()
});
