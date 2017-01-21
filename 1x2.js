var x = 0;
var y = 0;
var locs = [];
var facing = 0;

function changeFacing(direction) {
    if (direction=="R") {turnRight()}
    if (direction=="L") {turnLeft()}
}
function turnRight() {
    if (facing==3) {
        facing=0;
    }
    else {
        facing++;
    }
}
function turnLeft() {
    if (facing==0) {
        facing=3;
    }
    else {
        facing--;
    }
}
function getFacing() {
    if (facing==0) {return {x:0,y:1}}
    if (facing==1) {return {x:1,y:0}}
    if (facing==2) {return {x:0,y:-1}}
    if (facing==3) {return {x:-1,y:0}}
}
function move(length) {
    var cf = getFacing();
    // x+=cf.x*length;
    // y+=cf.y*length;
    for (var l = 0; l<length; l++) {
        locs.push({x: x, y: y});
        x+=cf.x;
        y+=cf.y;
    }
}
function main(input) {
    var moves = input.split(', ');
    for (var i=0; i<moves.length;i++){
        changeFacing(moves[i].substr(0,1));
        move(moves[i].substr(1));
    }
    for (var i=0; i<locs.length; i++) {
        for (var j=0; j<i; j++) {
            if (locs[j].x==locs[i].x && locs[j].y==locs[i].y){
                return(Math.abs(locs[i].x) + Math.abs(locs[i].y));
            }
        }
    }
}
main("R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3");