/*Fibonacci sequence until a limit: Modify the Fibonacci 
program to print the Fibonacci numbers that are less than a 
given number n. Instead of stopping the loop after a certain 
count of numbers, you'd stop it when the next number in the 
sequence is greater than n. */

function fibonacciUntilLimit() {
  const n = parseInt(prompt("What is your number?"))  

  let a = 0;
  let b = 1;
  let array = [a, b];

  for(let i = 2; i < n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
    array.push(sum);

  }
  alert(`This is ${array}`)
}

/*Even Fibonacci numbers: Modify the Fibonacci program to 
print only the even numbers in the Fibonacci sequence. You'll
 need to add an if statement within your loop to check if 
 the current number is even before printing it.
 */

function fibonacciEvenNumbers() {
  const n = parseInt(prompt("What is your number?"))  

  let a = 0;
  let b = 1;
  let count = 0;
  let array = [];

  while(count < n) {
    let sum = a + b;
    a = b;
    b = sum;

    if(sum % 2 === 0) {
      count++;
      array.push(sum);

    } 

  }
  
  alert(`This is ${array}`)
}

/*Fibonacci Sequence Sum: Instead of printing the Fibonacci 
sequence, calculate the sum of the first n Fibonacci numbers. */

function fibonacciSumUp() {
  const n = parseInt(prompt("What is your number?"))  

  let a = 0;
  let b = 1;
  let sum = 0;

  for(let i = 0; i < n; i++) {
   sum += a;
   let nextFibonacci = a + b;  
    a = b;
    b = nextFibonacci;
  }
  
  alert(`This is ${sum}`)
}

/*Fibonacci Checker: Write a function that accepts a number n 
and checks if it is a Fibonacci number. If it is, return "The 
number is a Fibonacci number". If it isn't, return "The number 
is not a Fibonacci number".
 */

function fibonacciIsNumberPartOf() {
  const n = parseInt(prompt("What is your number?"));

  let a = 0;
  let b = 1;

  while (b <= n) {
    if (b === n) {
      alert("The number is a Fibonacci number");
      return;
    }

    let nextFibonacci = a + b;
    a = b;
    b = nextFibonacci;
  }

  alert("This number is not a Fibonacci number");
}