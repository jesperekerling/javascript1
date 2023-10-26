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
    console.log('hej')
}