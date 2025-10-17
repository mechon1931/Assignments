let homeScore = document.getElementById("homescore");


let awayScore = document.getElementById("awayscore");

let sum = 0;
let total = 0;

function updateScoreboard() {
    homeScore.textContent = sum;
}
function plusOnePointHome() {
    sum += 1;
    updateScoreboard();    
    
}
function plusTwoPointHome() {
    sum += 2;
    updateScoreboard();        
}
function plusThreePointHome() {
    sum += 3;
    updateScoreboard();        
}

function updateScoreboardAway() {
    awayScore.textContent = total;
}
function plusOnePointAway() {
    total += 1;
    updateScoreboardAway();    
    
}
function plusTwoPointAway() {
    total += 2;
    updateScoreboardAway();        
}
function plusThreePointAway() {
    total += 3;
    updateScoreboardAway();        
}