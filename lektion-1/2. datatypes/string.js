// STRING = text


/*
    let name = 'Joakim'
    let name = "Joakim"     //      Most used
    let name = `Joakim`     //      Template literal
'*/


let text = "hej, jag är bäst i \"världen\" hej "
text = 'Mitt name är hej hej och jag är "bäst" \"hela\" i hela världen'


let name = "Jesper"
let age = 38;
text = 'Jag heter ' + name + ' och jag är ' + age + ' år gammal';

//template literal
text = `Hej ${name}, du är ${age} år
hej
gammal va?`;

console.log(text);

let text21 = new String('hej');
console.log(text2);


let myName = 'Joakim Lind';
console.log(myName.length)
// Count letters with length

console.log(myName.indexOf('K'));

let names = myName.split(' ');
console.log(names)

let firstName = "Jesper";
let lastName = "Ekerling"
let text2 = `mitt förnamn är ${firstName} och mitt eftername är ${lastName}`;

document.body.innerText = "Hej jag heter ${firstName} ";