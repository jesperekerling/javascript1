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

const apple = "Granny Smit"

console.log('hejj');


class User {
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.id = Math.random() * 1001;
        this.fullName = this.firstName + ' ' + this.lastName
    }
    login () {
        this.loggedIn = true;
    }
    logout () {
        this.loggedOut = true;
    }
}
// user2.login() {
// console.log(user2);


const user2 = new User('Kalle', 'Andersson', 'hej@hej.com', 36)
const user3 = new User('Sandra', 'Eriksson', 'hej@hej.com', 47)

console.log(user2);



class Admin extends User {
    constructor (adminId, firstName, lastName, email, age) {
        super(adminId, firstName, lastName, email, age)
        this.adminId = adminId
    }
}

const admin = new Admin(1, 'Hans', 'Svensson', 'emails@hej.com', 78);
console.log(admin);

