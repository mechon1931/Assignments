/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")

let meter
let feet
let gallon
let liter
let kilogram 
let pound
const meterToFeetConversion = 3.281
const literToGallonConverison = .264
const kgToLb = 2.204
//6.096


function lengthCard() {
    meter = userInput.value
    feet = userInput.value
    let userFeet = meter * meterToFeetConversion
    userFeet = parseFloat(userFeet).toFixed(3)
    let userMeter =  feet / meterToFeetConversion 
    userMeter = parseFloat(userMeter).toFixed(3)
    
    lengthConversion.innerHTML = `${meter} meter = ${userFeet} feet | ${feet} feet = ${userMeter} meters`
}

function volumeCard() {
    gallon = userInput.value
    liter = userInput.value
    let userGallon = gallon * literToGallonConverison
    userGallon = parseFloat(userGallon).toFixed(3)
    let userLiter =  liter / literToGallonConverison 
    userLiter = parseFloat(userLiter).toFixed(3)
    
    volumeConversion.innerHTML = `${liter} liters = ${userGallon} gallons | ${gallon} gallons = ${userLiter} liters`
}

function massCard() {
    kilogram = userInput.value
    pound = userInput.value
    let userPounds = kilogram * kgToLb
    userPounds = parseFloat(userPounds).toFixed(3)
    let userKilogram =  pound / kgToLb 
    userKilogram = parseFloat(userKilogram).toFixed(3)
    
    massConversion.innerHTML = `${kilogram} kilos = ${userPounds} pounds | ${pound} pounds = ${userKilogram} kilos`
}

let buttonPressed = convertBtn.addEventListener("click", function() {
    if(userInput.value !== '' && userInput.value !== null && !isNaN(userInput.value)) {
        lengthCard() 
        volumeCard()  
        massCard()
    } else {
        console.log("not a number")
    }
})








