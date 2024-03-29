const input = `kc-qy
qy-FN
kc-ZP
end-FN
li-ZP
yc-start
end-qy
yc-ZP
wx-ZP
qy-li
yc-li
yc-wx
kc-FN
FN-li
li-wx
kc-wx
ZP-start
li-kc
qy-nv
ZP-qy
nv-xr
wx-start
end-nv
kc-nv
nv-XQ`

var lines = input.split("\n");

var nodes = {};

for (let i = 0; i < lines.length; i++){
    var line = lines[i].split("-");
    var node1 = nodes[line[0]];
    if (!node1){
        node1 = { name: line[0], isBig: (line[0].toUpperCase() == line[0]), links: [] };
        nodes[line[0]] = node1;
    }
    var node2 = nodes[line[1]];
    if (!node2){
        node2 = { name: line[1], isBig: (line[1].toUpperCase() == line[1]), links: [] };
        nodes[line[1]] = node2;
    }
    node1.links.push(node2);
    node2.links.push(node1);
}

var startNode = nodes["start"];
var paths = [];

var findPaths = function(node, currentPath){

    for (let i = 0; i < node.links.length; i++){
        let next = node.links[i];
        if (next.name == "end"){
            currentPath.push(next.name);
            paths.push(currentPath.join("-"));
            currentPath.pop();
        }else if (next.name != "start"){
            if (next.isBig || currentPath.indexOf(next.name) == -1){
                 // can move to next
                currentPath.push(next.name);
                findPaths(next, currentPath);
                currentPath.pop();
            }
        }    

    }
}

findPaths(startNode, ["start"]);
console.log(paths.length);
