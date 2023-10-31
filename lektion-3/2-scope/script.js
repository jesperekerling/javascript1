let age = 36; // global scope
console.log('Outside code blocks ' + age)

{
    let age = 50;
    let fName = 'Joakim'; // local scope
    // var fName = 'Joakim'; // global scope

    console.log('Inside first code block', age, fName)


    {
        console.log("first code block", age, fName)
    }
}

console.log('Outside code blockss ' + age);

{
    let fName = 'Hans';
    console.log(fName)
}


// Functions
// To be able to reuse code

/*
Do not repeat yourself
*/

// Try to use funtions for specific taks, do not mix many tasks in one function



// Hoisting - function will be run at the top of the file
hello()

// Declaration of function
function hello() {
    console.log('Hello maaan')
}
// Run the function
hello()

hello()

const greet = function () {
    console.log('hello hey from greet')
}
greet()


// Function of a function is to return a value

const test = function() {
    console.log('test');
    return `Testing testingg` // When writing return the function will stop
}
const test1 = test()

let firstNamy = 'Jesper'

// parameter
const greet2 = function(name) {
    console.log('Hello ' + name + ' from greet2')
    return `hello ${name} from greetyyy`
}
const abc = greet2('Fredrik')
greet2(firstNamy)
greet2('Janne')

console.log(abc)



// Function with two parameters
const getFullName = function(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return
    }
    const fullName = `${firstName} ${lastName}`
    console.log(fullName)
    return fullName
}
const user1 = getFullName('Jesper', 'Ekerling')
const user2 = getFullName('Fredrik', 'Andersson')
const user3 = getFullName('Fredrik', 'Hansson-Storm')

getFullName('Li','Andersson')
getFullName(null, false)



// Function with default values
const add = function(num1 = 0, num2 = 0) {
    if(isNaN(num1) || isNaN(num2)) {
        console.error('Not a number')
        return 0
    }
    let sum = +num1 + +num2 // + sign makes strings convert to numbers
    return sum
}
let sum = add(8, "19")
console.log(sum)


// Arrow functions

const hello1 = () => {
    console.log('hello from arrow function')
}
hello1()


const calc = (num1, num2) => {
    return +num1 + +num2
}
console.log(calc(5, 2))

let summa = calc(8,9)
console.log(summa)


const calc2 = (num1, num2) => +num1 + +num2
console.log(calc2(15, 21))

// If only one parameter
const greet3 = name => `Hej ${name}`
console.log(greet3('Jesper'))


// Arrow functions is good for for loops
// Normal functions is usually function()

let myName = 'Jesper'
let upper = myName.toUpperCase()
console.log(upper)


const user = {
    firstName: 'Jesper',
    lastName: 'Ekerling',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    arrow: () => {
        console.log(`Arrow function `, this)
    },
    regular: function() {
        console.log(`Regular function `, this)
    },
    fullName2: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}
console.log(user.fullName())

console.log(user.fullName2())

user.arrow()
user.regular()

user.fullName()