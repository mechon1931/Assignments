
function printFibonacci() {
let a = 0;
let b = 1;
let count = 0;

while(count < 10) { 
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++
}

}

printFibonacci(10)