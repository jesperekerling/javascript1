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