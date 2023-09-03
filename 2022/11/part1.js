const input = `Monkey 0:
Starting items: 77, 69, 76, 77, 50, 58
Operation: new = old * 11
Test: divisible by 5
  If true: throw to monkey 1
  If false: throw to monkey 5

Monkey 1:
Starting items: 75, 70, 82, 83, 96, 64, 62
Operation: new = old + 8
Test: divisible by 17
  If true: throw to monkey 5
  If false: throw to monkey 6

Monkey 2:
Starting items: 53
Operation: new = old * 3
Test: divisible by 2
  If true: throw to monkey 0
  If false: throw to monkey 7

Monkey 3:
Starting items: 85, 64, 93, 64, 99
Operation: new = old + 4
Test: divisible by 7
  If true: throw to monkey 7
  If false: throw to monkey 2

Monkey 4:
Starting items: 61, 92, 71
Operation: new = old * old
Test: divisible by 3
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 5:
Starting items: 79, 73, 50, 90
Operation: new = old + 2
Test: divisible by 11
  If true: throw to monkey 4
  If false: throw to monkey 6

Monkey 6:
Starting items: 50, 89
Operation: new = old + 3
Test: divisible by 13
  If true: throw to monkey 4
  If false: throw to monkey 3

Monkey 7:
Starting items: 83, 56, 64, 58, 93, 91, 56, 65
Operation: new = old + 5
Test: divisible by 19
  If true: throw to monkey 1
  If false: throw to monkey 0`;

const sample = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

let lines = input.split("\n");

// parse monkeys
let monkeys = [];

for (let i = 0; i < lines.length; i+=7){
    let monkey = {};

    let startingItemsStr = lines[i+1].slice(16);
    let startingItems = startingItemsStr.split(", ");
    monkey.items = startingItems.map((t) => parseInt(t))

    let operationStr = lines[i+2].slice(17)
    monkey.operation = operationStr.split(" ");

    let testStr = lines[i+3].split(" ");
    monkey.test = parseInt(testStr[3]);

    let trueStr = lines[i+4].slice(27);
    monkey.true = parseInt(trueStr);
    
    let falseStr = lines[i+5].slice(28);
    monkey.false = parseInt(falseStr);
        
    monkey.inspections = 0;
    monkey.number = i / 7;
    monkeys.push(monkey);
}


function calculateNewWorry(worry, monkey){
    let op1 = monkey.operation[0] === 'old'? worry : parseInt(monkey.operation[0]);
    let op2 = monkey.operation[2] === 'old'? worry : parseInt(monkey.operation[2]);

    if (monkey.operation[1] === '+'){
        return op1 + op2
    }else if (monkey.operation[1] === '*'){
        return op1 * op2;
    }else{
        console.error("unsupported operation");
    }
}

const turnCount = 20;
for (let turn = 0; turn < turnCount; turn++){
    
    for (let m = 0; m < monkeys.length; m++){
        let monkey = monkeys[m];

        while (monkey.items.length > 0){
            let next = monkey.items.shift();

            monkey.inspections++;
            let newWorry = calculateNewWorry(next, monkey);

            newWorry = Math.floor(newWorry / 3);

            if ((newWorry % monkey.test) === 0){
                monkeys[monkey.true].items.push(newWorry);
            }else{
                monkeys[monkey.false].items.push(newWorry);
            }
        } 
    }
}

monkeys.sort((m1, m2) => m2.inspections - m1.inspections)

let monkeyBusiness = monkeys[0].inspections * monkeys[1].inspections;

console.log(monkeyBusiness);
