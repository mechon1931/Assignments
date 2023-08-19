
function rollDice() {
  let goldCoins = 0; // keep track of how many gold coins.

  for(let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Math.floor rounds down the number to the nearest integer  // by adding +1 generated a random integer 0 * 6. 

    if(roll === 1) {
      alert("Game over, no more rolls!");
      break;
    }

    if(roll < 4) {
      alert(`You got ${roll}, Roll again.`)
    } else if( roll === 4 && goldCoins > 1) {
      goldCoins -= 1;
      alert(`You got ${roll}, 1 coin subracted. Total gold coins: ${goldCoins}`)
    }

    if(roll === 5) {
      alert(`Congratulations you got roll: ${roll}, you win 5 gold coins!`)
      goldCoins += roll;
    } else if(roll === 6) {
      alert(`Congratulations you got roll: ${roll}, you win 6 gold coins!`)
      goldCoins += roll;

    }

    alert(`This your total gold coins: ${goldCoins}`);


  }

  alert(`This your total gold coins: ${goldCoins}`);

}