function runGame() {
  const target = Math.floor(Math.random() * 100) + 1;
  
  let guessString = '';
  let guessNumber = 0;
  let correct = false;
  let numTries = 0;
  let guessHistory = [];

  const guessHistoryElement = document.getElementById("guess-history");

  do {
    guessString = prompt("Guess a number between 1 - 100");

    if(guessString === null) {
      return;
    }

    guessNumber = +guessString; // Convert guessString to a number
    numTries++;
    
    guessHistory.push(guessNumber)
    correct = checkGuess(guessNumber, target);

  } while (!correct);
      guessHistoryElement.innerHTML = `Guess History: ${guessHistory.join(", ")}`; // Update guess history display
      
      alert(`Congratulations! You guessed the correct number ${target} in ${numTries} tries.\nGuess History: ${guessHistory.join(", ")}`);
}

function checkGuess(guessNumber, target) {
  let correct = false;
  const difference = Math.abs(guessNumber - target);

  if (isNaN(guessNumber)) {
    alert("Please enter a valid number.");
  } else if (guessNumber < 1 || guessNumber > 100) {
    alert("Please enter a number between 1 and 100.");
  } else if(guessNumber === target) {
    correct = true;
  } else if (guessNumber > target) {

    if(difference <= 5) {
      alert("Getting Warmer");
    } else {
      alert("Too high! Try a lower number.");
    }

  } else if (guessNumber < target) {
    if(difference <= 10) {
      alert("Getting Colder");
    } else {
      alert("Too low! Try a higher number.");
    }
  } else {
    correct = true;
  }
 
  return correct;
}

