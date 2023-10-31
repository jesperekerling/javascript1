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
    const fullName = `${firstName} ${lastName}`
    console.log(fullName)
    return fullName
}
const user1 = getFullName('Jesper', 'Ekerling')
const user2 = getFullName('Fredrik', 'Andersson')
const user3 = getFullName('Fredrik', 'Hansson')