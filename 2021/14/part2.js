const input = `FSKBVOSKPCPPHVOPVFPC

BV -> O
OS -> P
KP -> P
VK -> S
FS -> C
OK -> P
KC -> S
HV -> F
HC -> K
PF -> N
NK -> F
SC -> V
CO -> K
PO -> F
FB -> P
CN -> K
KF -> N
NH -> S
SF -> P
HP -> P
NP -> F
OV -> O
OP -> P
HH -> C
FP -> P
CS -> O
SK -> O
NS -> F
SN -> S
SP -> H
BH -> B
NO -> O
CB -> N
FO -> N
NC -> C
VF -> N
CK -> C
PC -> H
BP -> B
NF -> O
BB -> C
VN -> K
OH -> K
CH -> F
VB -> N
HO -> P
FH -> K
PK -> H
CC -> B
VH -> B
BF -> N
KS -> V
PV -> B
CP -> N
PB -> S
VP -> V
BO -> B
HS -> H
BS -> F
ON -> B
HB -> K
KH -> B
PP -> H
BN -> C
BC -> F
KV -> K
VO -> P
SO -> V
OF -> O
BK -> S
PH -> V
SV -> F
CV -> H
OB -> N
SS -> H
VV -> B
OO -> V
CF -> H
KB -> F
NV -> B
FV -> V
HK -> P
VS -> P
FF -> P
HN -> N
FN -> F
OC -> K
SH -> V
KO -> C
HF -> B
PN -> N
SB -> F
VC -> B
FK -> S
KK -> N
FC -> F
NN -> P
NB -> V
PS -> S
KN -> S`;

var lines = input.split("\n");

var string = lines[0];

var firstchar = string[0];
var lastchar = string[string.length - 1];

var rules = [];
for (let i = 2; i < lines.length; i++){
    var line = lines[i];
    line = line.split(" -> ");
    rules.push( { rule: line[0], a: line[0][0] + line[1], b: line[1] + line[0][1] });
}

var pairs = {};

for (let i = 0; i < string.length -1;i++){
    var pair = string[i] + string[i+1];
    if (!pairs[pair]){
        pairs[pair] = 0;
    }
    pairs[pair]++;
}

var stepcount = 40;
for (let step = 0; step < stepcount; step++){
    
    let newPairs = {};
    for (let i = 0; i < rules.length; i++){
        let rule = rules[i];
        let ruleoccurrences = pairs[rule.rule];
        if (ruleoccurrences > 0){
            if (!newPairs[rule.a])
                newPairs[rule.a] = 0;
            if (!newPairs[rule.b])
                newPairs[rule.b] = 0;

            newPairs[rule.a] += ruleoccurrences;
            newPairs[rule.b] += ruleoccurrences;
        }
    }
    pairs = newPairs;
}


var charmap = {};
var keys = Object.keys(pairs);
for (let i = 0; i < keys.length; i++){
    var pairCount = pairs[keys[i]];
    var char1 = keys[i][0];
    var char2 = keys[i][1];
    if (!charmap[char1])
        charmap[char1] = 0;
    charmap[char1] += pairCount;
    if (!charmap[char2])
        charmap[char2] = 0;
    charmap[char2] += pairCount;
}

charmap[firstchar]++;
charmap[lastchar]++;

var sizeArray = [];
var keys = Object.keys(charmap);
keys.forEach((k) => {
    var occurrences = charmap[k] / 2;
    sizeArray.push({ letter: k, size: occurrences });
});

sizeArray.sort((s1, s2) => s2.size -s1.size);

let largest = sizeArray[0].size;
let smallest = sizeArray[sizeArray.length - 1].size;

console.log(largest, smallest, largest-smallest);