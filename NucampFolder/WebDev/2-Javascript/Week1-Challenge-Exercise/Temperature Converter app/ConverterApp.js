

function CelsiusToFahrenheit() {
    let celsius = prompt("Please enter your number in Celsius");
    let fahrenheit = (celsius * 9/5) + 32;
    
    return alert("Your conversion return " + fahrenheit.toFixed(2) + "F");
}

function FahrenheitToCelsius() {
   let fahrenheit = prompt("Please enter your number in Fahrenheit");
   let celsius =  (fahrenheit - 32) * 5/9;

   return alert("Your conversion return " + celsius.toFixed(2) + "C")
}

