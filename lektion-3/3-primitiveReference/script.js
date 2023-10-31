let numberOne = 50
let numberTwo = numberOne

console.log(`numberOne = ${numberOne}, numberTwo = ${numberTwo}`),
numberOne = 100
console.log(`numberOne = ${numberOne}, numberTwo = ${numberTwo}`);


const userOne = { name: 'Jesper', age: 38 }
const userTwo = userOne
const userThree = { name: 'Ahmed', age: 26 }

console.log(userOne, userTwo)
userOne.name = 'Hans'
userOne.age = 50
console.log(userOne, userTwo)

console.log(userOne === userTwo)
if(userOne == userThree) {
    console.log('Same same same')
}

const users = [
    { id: 1, name: 'Jesper', age: 38 },
    { id: 2, name: 'Ahmed', age: 26 },
    { id: 3, name: 'Hans', age: 50 }
]

console.log(users)


const hans = users.find(user => user.name === 'Hans')

hans.age = 200

console.log(hans)



const userFour = {...userOne}
const users2 = [...users]

console.log(userFour)
console.log(users2)