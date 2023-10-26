// Comment on single row

/*
Comment on multiple
rows
 */

/*

var = global - Old, avoid using
let = can be replaced
const = cannot be replaced
using - New variable, check out

camelCase
SCREAMING_SNAKE_CASE = If a variable NEVER will change

String = text
Number = all numbers
Boolean = true/false value
null = manually set empty value
undefined = automatically set empty value
Object = contains one or more key:value pairs
Array = list of one or more values
*/


// example of undefnend value
const test = () => {}

const test2 = test()
console.log(test2)



// Types of strings citations
let text = 'text with single citation'
text = "new text med double citations"
text = `text with literal (backticks) ${1+6}`
console.log(text)


const firstName = 'Janne'
const lastName = 'Andersson'

const fullName = firstName + ' ' + lastName
console.log(fullName [0])
// Write first letter from variable

const initials = firstName [0] + lastName [0]
console.log(initials)

// Check up substring


// NUMBERS

let number = 20
number += 20
number++
console.log(number)





// Frågor, clg???
// Frågor, text om funktionerna???


// OBJECTS

const obj1 = {
    key: `value11`,
    key2: `value2`
}

console.log(obj1.key)
console.log(obj1)

obj1.name = `Janne222`
console.log(obj1)

// functions can be added to objects