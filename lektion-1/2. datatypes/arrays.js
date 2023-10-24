/*
    ARRAYS

    A list with multiple values

    In an array every has a specific placement, compare to an object were it does not have to be like that

    We want to keep the same datatype inside an array.
    const arr = [1, 2, 3, 4]

*/

const users = [
    { firstname: 'John', lastName: 'Smith', age: 36, isActive: true },
    { firstname: 'Jonny', lastName: 'Smith', age: 36, isActive: true },
    { firstname: 'JAnny', lastName: 'Smith', age: 36, isActive: true },
]

const names = ['Fredrik', 'Muhammed','Janne'];

console.log(names);
//console.log(names[0]);


// Add beginningg of an array
names.unshift('Colin')
console.log(names)

names.shift()
console.log(names)

// Add in the end of an array
names.push('JAANNNN')
console.log(names)

names.pop()
console.log(names)


names[1] = 'Johnnnyy Doe'
/* console.log((names.indexOf('Nytt namn'))) */
/* names[index] = 'hej' */

names.splice(1, 1)



// Study this: splice and indexof, concat, spreah operator

console.log(names)


const obj = {
    fName: 'JohnnnyyOO',
    lName: 'KEEEKKK'
}
const obj2 = {
    ...obj,
    lName: 'KEEEKK222',
    fName: 'dsuhaiu'
}
console.log (obj)

names.sort((a,b) => {
    return Math.random() - 0.5
    }
)
console.log(names)