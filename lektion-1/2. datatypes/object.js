/*
    OBJECT

    Contains one or more values

    written as key:key value

    JSON (JavaScript Object Notation)


    Const is good for creation objects

    const person = {
        firstName: 'Fist Name',
        lastName: 'Last Name',
    }

    Example of JSON Object
    const person = {
        "firstName": "Fist Name",
        "lastName": "Last Name",
    }
*/

const person = {
    firstName: 'Fist Name',
    lastName: 'Last Name',
    age: 38,
    address: {
        street: "gataaa 34",
        number: 12,
        postalCode: "12337",
    },
    hej: "hejjjj",
    isValidated: true
}


console.log(person);

console.log('Postal code: ' + person.address.postalCode)

console.log(person.age)

person.firstName = 'Nisse'

person.email = 'email@example.com'


// Convert to JSON
let json = JSON.stringify(person)
console.log(json);


// Convert from JSON to JS
let js = JSON.parse(json)
console.log(js);

/* 
// Destructure
const firstName = person.firstName
const lastName = person.lastName
console.log(`Users name is ${firstName} + ${lastName}`)
 */


const {firstName, lastName} = person


console.log('Hej ' + person);