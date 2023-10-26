// High Order Array Methods

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const users = [
    {name: 'John', email: 'j@j.com', age: 34, status: true},
    {name: 'Janne', email: 'j12313@j.com', age: 10, status: false},
    {name: 'Jonny', email: 'j123123@j.com', age: 6, status: false},
    {name: 'Johanness', email: 'j123123@j.com', age: 8, status: false},
    {name: 'Joohan', email: '444j@j.com', age: 34, status: true},
    {name: 'Joo', email: 'j12211@j.com', age: 34, status: false},
]


// Reduce
// Count values together
const sum = numbers.reduce(function(acc, curr) {
    console.log(`acc: ` + acc)
    console.log(`curr: ` + curr)
    return acc + curr
}
)
console.log(sum)

// Filter
const filteredArray = numbers.filter(function(number) {
    return number < 6
} )
console.log(filteredArray)
const usersUnderAgeUsers = users.filter(function(user) {
    return user.age < 18
} )
console.log(usersUnderAgeUsers)



// Loops


// A for loop is the loop with much control
let i = 0
for (let i = 3; i < users.length; i++) {
    console.log('Users: ' + i)
    console.log(users[i])
    if(users.age < 18) {
        continue // skip this iteration and go to the next
    }

    if(users[i].name == 'Johan') {
        break // stop the loop
    }
}
console.log(users[i]);


// Lighter version of a loop, that goes through ALL the items in an array
users.forEach(function(user, i) {
    //console.log('index: ' + i++)
    //console.log(user)

    document.body.innerHTML += `<p>${i + 1}  ${user.name}</p>`
} )


// MAP

const newUsers = users.map(function(user, i) {
    return {...user, status: false}
})
console.log(newUsers)


// while loop
let j = 11;

while(j < 5) {
    console.log('while: ' + j)
    j++
}
console.log('i är nu: ' + j)

// do while loop
// always runs one time
do {
    console.log('do while: ' + j)
    j++
} while(j < 10)
console.log('i är nu: ' + j)

