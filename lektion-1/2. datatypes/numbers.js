/*
    NUMBERS

    +   =   adding
    -   =   subtracting
    *   =   multiply
    /   =   divide
    **  =   double multiply 
    Math.   =   A lot of math functions
    %       =   division remainder

    ++      =   add 1
    --      =   subtract 1
    +-      =   Add to the current value
    -=      =   Remove from the current value
*/


let num1 = 10;
let num2 = 2.5

num1 = num1 + 1;

num1 = num1 += 2;
console.log(num1);

let string1 = "20";

console.log(num1 + +string1); // Converts string1 to a string wiht a + sign

console.log(Math.random() * 100);
let roundedNumber = Math.random() * 100;
let randomer = Math.ceil(roundedNumber);
let randomer2 = Math.round(roundedNumber);
console.log(randomer);
console.log(randomer2);