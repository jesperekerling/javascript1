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


