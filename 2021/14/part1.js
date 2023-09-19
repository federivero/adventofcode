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

var rules = [];
for (let i = 2; i < lines.length; i++){
    var line = lines[i];
    line = line.split(" -> ");
    var rule = { string: line[0], extra: line[1]};
    rules.push(rule);
}

var stepcount = 10;
for (let step = 0; step < stepcount; step++){
    var pairs = [];
    for (let i = 0; i < string.length - 1;i++){
        pairs.push(string[i] + string[i+1]);
    }    

    var newstring = string[0];

    for (let i = 0; i < pairs.length; i++){
        for (let j = 0; j < rules.length ;j++){
            if (pairs[i] == rules[j].string){
                newstring += rules[j].extra;
                break;
            }
        }

        newstring += pairs[i][1];
    }

    string = newstring;
}

var map = {};
for (let i = 0; i < string.length; i++){
    var char = string[i];
    if (!map[char])
        map[char] = 0;
    map[char]++;
}

var sizeArray = [];
var keys = Object.keys(map);
keys.forEach((k) => {
    var occurrences = map[k];
    sizeArray.push({ letter: k, size: occurrences });
});

sizeArray.sort((s1, s2) => s2.size -s1.size);

let largest = sizeArray[0].size;
let smallest = sizeArray[sizeArray.length - 1].size;

console.log(largest, smallest, largest-smallest);