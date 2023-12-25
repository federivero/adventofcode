const input = `&sr -> hp
%sh -> lr
%jm -> pj, tf
&xr -> sn, sb, hd
%xt -> cc, tf
%br -> fm
%hd -> tp, xr
%rg -> xr, dl
%sb -> jh
%xg -> rd
%nf -> gx, gd
%pj -> tf, dk
%gq -> jm
%vv -> br
%gd -> gx
&hp -> rx
%cz -> gk, vv
&gk -> vq, vv, br, zt, dj, xg
%gr -> zn, xr
&tf -> cc, rf, kk, xt, gq
%dk -> tb, tf
%nt -> ph, gk
%fh -> xr, xs
%jh -> xr, bz
%pd -> gk, kb
%kb -> nt, gk
%fm -> dj, gk
%kr -> tf
%tp -> xr, rq
%lr -> mz, gx
&sn -> hp
%mz -> rv
%kj -> gx, hs
%rv -> gx, ck
%cr -> kk, tf
%rq -> gr, xr
%kk -> fc
%ck -> gx, nf
broadcaster -> hd, xt, kj, zt
%tt -> gf
%tb -> kr, tf
%gf -> gx, sh
%cc -> cr
%fc -> qx, tf
%dl -> xr
&gx -> mz, sh, tt, sr, kj, tk
%dj -> pd
%zt -> gk, xg
&rf -> hp
&vq -> hp
%xs -> sb, xr
%qx -> tf, gq
%bz -> xr, rg
%ph -> gk
%hs -> gx, tk
%tk -> tt
%rd -> gk, cz
%zn -> fh, xr`

const test = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a` 

const test2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`

let TYPE_ENUM = {
    FLIP_FLOP: '%',
    CONJUCTION: '&',
    OUTPUT: 'O',
}
let PULSE_TYPE_ENUM = {
    LOW: 0,
    HIGH: 1,
}
let FLIP_FLOP_TYPE_ENUM = {
    OFF: 0,
    ON: 1,
}

let lines = input.split("\n")
let broadcaster = null;

let modulesList = [];
let modules = {};
lines.map((l) => {
    let tokens = l.split(" -> ");
    let name = tokens[0];
    let destinations = tokens[1].split(", ");

    if (name === "broadcaster"){
        broadcaster = { id: name, destinations };
    }else{
        let id = name.slice(1);
        let module = { id, destinations, type: name[0] }; 
        if (module.type === TYPE_ENUM.FLIP_FLOP){
            module.state = FLIP_FLOP_TYPE_ENUM.OFF;
        }else{
            module.receivedPulses = {};
            module.inputPulses = [];
        }
        modules[id] = module;
        modulesList.push(module);
    }
})

for (let i = 0; i < modulesList.length; i++){
    let m = modulesList[i];
    m.destinations.map((dest) => {
        let destNode = modules[dest];
        if (destNode){
            if (destNode.type === TYPE_ENUM.CONJUCTION){
                destNode.receivedPulses[m.id] = PULSE_TYPE_ENUM.LOW;
                destNode.inputPulses.push(m);
            }
        }else{
            // it's an ouptut node
            let output = { id: dest, type: TYPE_ENUM.OUTPUT, destinations: [] };
            modulesList.push(output);
            modules[dest] = output;
        }
    });
}

let countLow = 0;
let countHigh = 0;

let printPulses = false;

function sendPulses(pulseList, module, pulseType){
    for (let i = 0; i < module.destinations.length; i++){
        if (printPulses){
            console.log(`${module.id} -${pulseType ? 'high' : 'low'}-> ${module.destinations[i]}`)
        }
        pulseList.push({ origin: module.id, type: pulseType, dest: module.destinations[i] });
    }
    if (pulseType === PULSE_TYPE_ENUM.LOW){
        countLow += module.destinations.length;
    }else if (pulseType === PULSE_TYPE_ENUM.HIGH){
        countHigh += module.destinations.length;
    }
}

let initialPulseCount = 1000;
for (let i = 0; i < initialPulseCount; i++){

    let pulsesSending = []
    for (let b = 0; b < broadcaster.destinations.length; b++){
        if (printPulses){
            console.log(`broadcaster -low-> ${broadcaster.destinations[b]}`)
        }
        pulsesSending.push({ origin: 'broadcaster', type: PULSE_TYPE_ENUM.LOW, dest: broadcaster.destinations[b] });
    }
    countLow += broadcaster.destinations.length + 1;

    while(pulsesSending.length > 0) {
        let pulse = pulsesSending.shift();

        let module = modules[pulse.dest];
        if (module.type === TYPE_ENUM.FLIP_FLOP){
            if (pulse.type === PULSE_TYPE_ENUM.LOW){
                if (module.state === FLIP_FLOP_TYPE_ENUM.OFF){
                    module.state = FLIP_FLOP_TYPE_ENUM.ON;
                    sendPulses(pulsesSending, module, PULSE_TYPE_ENUM.HIGH)
                }else{
                    module.state = FLIP_FLOP_TYPE_ENUM.OFF;                    
                    sendPulses(pulsesSending, module, PULSE_TYPE_ENUM.LOW)
                }
            } // else, it's ignored
        } else if (module.type === TYPE_ENUM.CONJUCTION){
            module.receivedPulses[pulse.origin] = pulse.type;
            if (module.inputPulses.some((mod) => module.receivedPulses[mod.id] === PULSE_TYPE_ENUM.LOW)){
                sendPulses(pulsesSending, module, PULSE_TYPE_ENUM.HIGH);
            }else{
                sendPulses(pulsesSending, module, PULSE_TYPE_ENUM.LOW);
            }
        }else if (module.type === TYPE_ENUM.OUTPUT){
            // ignor   
        } else {
            console.log("UNEXPECTED TYPE");
            exit();
        }
    }

    if (printPulses){
        console.log("-------------------");
    }
}

console.log(countLow, countHigh);
console.log(countLow * countHigh);
