
/* Assigment 1.
let myAge = 34;
console.log(myAge)
*/

/* Assignment 2
let myAge = 34;
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge)
*/

/* Assignment 3
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
bonusPoints = bonusPoints - 75;
bonusPoints = bonusPoints + 45;
console.log(bonusPoints)
*/

/* Assignment 4
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countdown()
*/

/* Assignment 5
function myLogger() {
    console.log(42);
}
myLogger();
*/

/* Assignment 6
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumAll() {
    let finalLap = lap1 + lap2 + lap3;
    console.log(finalLap)
}
sumAll();
*/

/* Assignment 7 
let lapsCompleted = 0;
function totalLapsCompleted() {
    let increment = 1 + lapsCompleted;
}
totalLapsCompleted()
totalLapsCompleted()
console.log(lapsCompleted)
*/


// document.getElementById("count-el").innerText = 5

//CTR+ALT+N

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    //console.log("The button was clicked")
    count += 1;
    //countEl records the number and adds everytim button is clicked on html. 
    countEl.textContent = count;
    //console.log(count);
};

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    // resets counter to 0 once button save is pressed. 
    countEl.textContent = 0;
    count = 0;
}


