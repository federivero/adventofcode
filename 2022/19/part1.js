const input = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 6: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 7: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 2 ore and 8 obsidian.
Blueprint 8: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 4 ore and 19 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 5 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 14: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 15: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 17: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 20: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 21: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 20 obsidian.
Blueprint 22: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 23: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 5 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 24: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 13 obsidian.
Blueprint 25: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 8 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 28: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 8 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 29: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 30: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.`;

const sample = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`;

let lines = input.split("\n");

let blueprints = lines.map((line) => {
    let tokens = line.split(" ")
    let bp = {}
    bp.id = parseInt(tokens[1].slice(0, tokens[1].length - 1))
    bp.oreCost = parseInt(tokens[6])
    bp.clayCost = parseInt(tokens[12])
    bp.obsidianOreCost = parseInt(tokens[18])
    bp.obsidianClayCost = parseInt(tokens[21])
    bp.geodeOreCost = parseInt(tokens[27])
    bp.geodeObsidianCost = parseInt(tokens[30])
    bp.maxForClay = Math.max(bp.oreCost, bp.clayCost);
    bp.maxForObsidian = Math.max(bp.oreCost, bp.clayCost, bp.obsidianOreCost);
    bp.maxForGeode = Math.max(bp.oreCost, bp.clayCost, bp.obsidianOreCost, bp.geodeOreCost);
    return bp
})

function fireOptions(bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots){
    let maxGeode = geode;
    maxGeode = Math.max(maxGeode, calculateGeods(bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots, 1, 0, 0, 0));
    maxGeode = Math.max(maxGeode, calculateGeods(bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots, 0, 1, 0, 0));
    if (clayRobots > 0){
        maxGeode = Math.max(maxGeode, calculateGeods(bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots, 0, 0, 1, 0));        
    }
    if (obsidianRobots > 0){
        maxGeode = Math.max(maxGeode, calculateGeods(bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots, 0, 0, 0, 1));        
    }
    return maxGeode;
}

function calculateGeods(maxGeode, bp, time, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots){
    // construct
    if (newOreRobots <= 0 && newClayRobots <= 0 && !newObsidianRobots && !newGeodeRobots){
        if (ore >= bp.oreCost){
            maxGeode = calculateGeods(maxGeode, bp, time, ore - bp.oreCost, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots + 1, newClayRobots, newObsidianRobots, newGeodeRobots)
        }  
        if (ore >= bp.clayCost){ 
            maxGeode = calculateGeods(maxGeode, bp, time, ore - bp.clayCost, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots + 1, newObsidianRobots, newGeodeRobots)
        }
        if (ore >= bp.obsidianOreCost && clay >= bp.obsidianClayCost){ 
            maxGeode = calculateGeods(maxGeode, bp, time, ore - bp.obsidianOreCost, clay - bp.obsidianClayCost, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots + 1, newGeodeRobots)
        }
        if (ore >= bp.geodeOreCost && obsidian >= bp.geodeObsidianCost){ 
            maxGeode = calculateGeods(maxGeode, bp, time, ore - bp.geodeOreCost, clay, obsidian - bp.geodeObsidianCost, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, newOreRobots, newClayRobots, newObsidianRobots, newGeodeRobots + 1)
        }
    }    

    let moreThanRequired = obsidianRobots > 0 ? ore >= bp.maxForGeode : (clayRobots > 0 ? ore >= bp.maxForObsidian : (ore > bp.maxForClay) )

    // gather 
    ore += oreRobots;
    clay += clayRobots;
    obsidian += obsidianRobots;
    geode += geodeRobots

    oreRobots += newOreRobots;
    clayRobots += newClayRobots;
    obsidianRobots += newObsidianRobots;
    geodeRobots += newGeodeRobots;

    if (time > 1 && !moreThanRequired){
        // check if configuration for next minute was already calculated
        const solution = calculateGeods(maxGeode, bp, time - 1, ore, clay, obsidian, geode, oreRobots, clayRobots, obsidianRobots, geodeRobots, 0, 0, 0, 0);
        return Math.max(maxGeode, solution);
    }else {
        return Math.max(maxGeode, geode);
    }
}

let sum = 0;
for (let i = 0; i < blueprints.length; i++){
    let geode = calculateGeods(0, blueprints[i], 24, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0)
    sum += geode * blueprints[i].id; 
    console.log(sum, geode, blueprints[i].id)
}
console.log(sum);
