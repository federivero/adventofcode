const input = `20546718027401204FE775D747A5AD3C3CCEEB24CC01CA4DFF2593378D645708A56D5BD704CC0110C469BEF2A4929689D1006AF600AC942B0BA0C942B0BA24F9DA8023377E5AC7535084BC6A4020D4C73DB78F005A52BBEEA441255B42995A300AA59C27086618A686E71240005A8C73D4CF0AC40169C739584BE2E40157D0025533770940695FE982486C802DD9DC56F9F07580291C64AAAC402435802E00087C1E8250440010A8C705A3ACA112001AF251B2C9009A92D8EBA6006A0200F4228F50E80010D8A7052280003AD31D658A9231AA34E50FC8010694089F41000C6A73F4EDFB6C9CC3E97AF5C61A10095FE00B80021B13E3D41600042E13C6E8912D4176002BE6B060001F74AE72C7314CEAD3AB14D184DE62EB03880208893C008042C91D8F9801726CEE00BCBDDEE3F18045348F34293E09329B24568014DCADB2DD33AEF66273DA45300567ED827A00B8657B2E42FD3795ECB90BF4C1C0289D0695A6B07F30B93ACB35FBFA6C2A007A01898005CD2801A60058013968048EB010D6803DE000E1C6006B00B9CC028D8008DC401DD9006146005980168009E1801B37E02200C9B0012A998BACB2EC8E3D0FC8262C1009D00008644F8510F0401B825182380803506A12421200CB677011E00AC8C6DA2E918DB454401976802F29AA324A6A8C12B3FD978004EB30076194278BE600C44289B05C8010B8FF1A6239802F3F0FFF7511D0056364B4B18B034BDFB7173004740111007230C5A8B6000874498E30A27BF92B3007A786A51027D7540209A04821279D41AA6B54C15CBB4CC3648E8325B490401CD4DAFE004D932792708F3D4F769E28500BE5AF4949766DC24BB5A2C4DC3FC3B9486A7A0D2008EA7B659A00B4B8ACA8D90056FA00ACBCAA272F2A8A4FB51802929D46A00D58401F8631863700021513219C11200996C01099FBBCE6285106`

var binary = [];

var data = input;
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
