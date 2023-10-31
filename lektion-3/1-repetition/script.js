const names = ["Kalle", "Pelle", "Olle", "Nisse"];
users = [
    {name: "Kalle", age: 20},
    {name: "Pelle", age: 30},
    {name: "Olle", age: 40},
]


let todos = [
    {id: 1, text: "Köp mjölk", isCompleted: true},
    {id: 2, text: "Köp ägg", isCompleted: false},
    {id: 3, text: "Köp kaffe", isCompleted: true},
    {id: 4, text: "Köp kaffe", isCompleted: false},
]

// A filter returns a new array, can manipulate the array
todos = todos.filter(function(todo) {
    return todo.id !== 3;
})
// Om man ska använda const istället så använder man splice-funktionen



console.log(todos)

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    console.log(i);
}

// forEch är en highOrder-funktion, rekommenderas att använda
names.forEach(function(name, index) {
    console.log(index + ' ' + name);
    console.log(index);
});

const newUsers = users.map(function(user, index) {
    //user.name = user.name.toUpperCase();

    //return user;

    return user.age;
})
console.log(newUsers)








// If statements

let value = ``;

if(value.length === 0) {
    console.log("Du måste skriva in någonting att görrraa");
}
else if (value.length > 3) {
    console.log("Texten behöver lite längre");
}
else {
    console.log("Bra jobbat!");
}


// Switch statements is more readable than if statements and also efficient

switch(value) {
    case 'Joakim':
        console.log("Hej Joakim");
        break;
    case 'Kalle':
        console.log("Hej Kalle");
        break;
    default:
        console.log("Hej på dig");
        break;
}
