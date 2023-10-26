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


// Example of JSON, JSON is a long text string
const json = JSON.stringify(obj1)
console.log(typeof json) //Check type of string
console.log(json)


const js = JSON.parse(json)
console.log(js)


// ARRAYS
// A list of whatever you want (text, boolean, numbers, objects, arrays)

const users = [
    { id: 1, name: `Janne`, age: 30},
    { id: 2, name: `Kalle`, age: 40},
    { id: 3, name: `Anna`, age: 20}
]

console.log(users)

// Structure arrays with the same type of data on same positions for good structure

// Accessing data in arrays
console.log(users[0].name)

/*
unshift() = Adds to beginning of array
push() = Adds to end of array
shift() = Deletes in the end of an array and returns the value
pop() = Deletes in the end of an array and returns the value

*/

const me = users.shift()
console.log(me)

// find = whole Object
// findIndex = find specific thing in object

const kalle = users.find(user => user.name === `Kalle`)
console.log(kalle)

users.splice(1, 0, { id: 3, name: `Kalle2`, age: 45 })
console.log(users)
console.log(users[0].name)

// Splice --> change or remove objects in an array

