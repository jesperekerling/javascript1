let email = 'jesper@hi.com'
console.log(email.includes('@'))

if (email.includes('@')) {
    console.log('Valid email')
}

//ifsats if email has @ in it



let number = 13
let string = '13'

console.log(13 == '13') //loose equality
console.log(13 === '13') //strict equality (same type and value)

console.log('heej')
console.log(11 !== '11')


const user = {
    name: 'jesper',
    active: true
}

if (user.active) {
    console.log(`${user.name} is active`)
}

if (user.active == true) {
    console.log(`${user.name} is active`)
}


console.log(3 > 2)

console.log(2 <= 2)

for(let i = 0; i < 7; i++) {
    console.log(i)
}

user.active = false;

// && both if statements must me true
if(user.active === false && user.name === 'jesper') {
    console.log('user is not active')
}

// || one of the if statements must be true
if(user.active === false || user.name === 'jesper') {
    console.log('At least something is correct here')
}

if(1==1 && 2==2 || 1==1 && 4==4) {
    console.log('both are true')
}

user.active = true;

if(user.active)
    console.log('user is active')
else
    console.log('user is not active')


user.active ? console.log('user is active') : console.log('user is not active')

user.active
    ? console.log('user is active')
    : console.log('user is not active')

let text = `User2 is ${user.active ? 'active' : 'not active'}`
console.log(text)

// Example of halv bad if statement
user.active
    ? 2 === 2 ? console.log('2 is 2') : console.log('2 is not 2')
    : console.log('user is not active')


// User switch instead of long it statements

// SWITCH

const color = 'yellow'
if(color === 'black') {
    console.log('color is black')
}
else if(color === 'red') {
    console.log('color is red')
}
else if(color === 'blue') {
    console.log('color is blue')
}


// Switch is faster than if statements
switch(color) {
    case 'black':
        console.log('color is black')
        break
    case 'white':
        console.log('color is blue')
        break
    case 'red':
        console.log('color is redd')
        break;
    default:
        console.log('color is not black, white or red')
}