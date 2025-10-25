const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLeft = document.getElementById("placeholder-left");
let passwordRight = document.getElementById("placeholder-right")
let sliderOutput = document.getElementById("output-slider")

function generatepassword() {
    generateRandomPassword(sliderOutput.textContent)
}

function generateRandomPassword(length,passwordCopy) {
    let password = ""
    let password1 = ""
    
    for(let i = 0; i < length; i++) {
        randomCharacter = Math.floor(Math.random() * characters.length)
        password += characters[randomCharacter]
        
        randomCharacter1 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomCharacter1]  
        
    }
        passwordLeft.textContent = password
        passwordRight.textContent = password1
        
        
}
    

