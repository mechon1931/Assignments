/******************* CHALLENGE 1: CONCAT ******************/
const states1 = ['Iowa', 'Texas', 'Oregon']; 
const states2 = ['Kansas', 'California', 'Nevada'];
// concat() the above two arrays into a single array and assign the 
//result to the states array below (delete the empty array 
//currently there)
const states = states1.concat(states2);

// you do not need to change the line below
document.querySelector('#challenge1').textContent = states.join(', ');
/****************** End of Challenge 1 ********************/

/******************* CHALLENGE 2: SORT ********************/
const animals = ['bonobo', 'hyena', 'zebra', 'koala', 'tiger'];
// write code below this line to sort the animals array
animals.sort()

// you do not need to change the line below
document.querySelector('#challenge2').textContent = animals.join(', ');
/****************** End of Challenge 2 ********************/

/****************** CHALLENGE 3: REVERSE ******************/
const numbers = [7, 13, 68, 49, 10000, 0.23]
// write code below this line to reverse the numbers array
numbers.reverse();

// you do not need to change the line below
document.querySelector('#challenge3').textContent = numbers.join(', ');
/****************** End of Challenge 3 ********************/

/******************** CHALLENGE 4: SLICE ******************/
const directions = ['n', 's', 'nw', 'e', 'se'];
// write code below this line to slice the items with index 2 
//and 3 from the directions array, and assign the resulting array 
//to the variable newDirections (delete the empty array currently 
//there)
const newDirections = directions.slice(2,4);

// you do not need to change the line below
document.querySelector('#challenge4').textContent = newDirections.join(', ');
/****************** End of Challenge 4 ********************/

/************* CHALLENGE 5: SPLICE TO INSERT **************/
const birds = ['seagull', 'hawk', 'sparrow', 'raven'];
// write code below this line to add 'owl' to the birds array, 
//between 'sparrow' and 'raven', using splice
birds.splice(3,0,'owl')

// you do not need to change the line below
document.querySelector('#challenge5').textContent = birds.join(', ');
/****************** End of Challenge 5 ********************/

/************* CHALLENGE 6: SPLICE TO REMOVE **************/
const menu = ['gyro', 'sandwich', 'burger', 'taco', 'pasta'];
// write code below this line to remove 'burger' and 'taco' from
// the menu array, using splice once
menu.splice(2,2)

// you do not need to change the line below
document.querySelector('#challenge6').textContent = menu.join(', ');
/****************** End of Challenge 6 ********************/

/************* CHALLENGE 7: SPLICE TO REPLACE *************/
const drinks = ['milkshake', 'coffee', 'tea', 'mimosa']
// write code below this line to replace 'milkshake'
// from the drinks array and replace it with 'lemonade',
// using splice once.
drinks.splice(0,1, 'lemonade')

// you do not need to change the line below
document.querySelector('#challenge7').textContent = drinks.join(', ');
/****************** End of Challenge 7 ********************/