// Example of comment in javascript

/* 

Multi line comment
Multi line comment
Multi line comment

 */

/* Console is used to write out information
during the development */

/* Open console in Google Chrome on MacOS:
option + cmd + j */



/*
Variables

camelCase --> Varje nytt ord --> Stor bokstav
camelCase       =   Used in JS, Java, C och C++
Pascal case     =   C#, Pascal
_private        =   a variable that is only used during a certain scope

API_KEY         =   Used when the value is constant and never changes

Example of camelCase: firstName, lastName, email

*/


/* firstName = 'Jesper';           // Global declaration of a variable, DO NOT DO THIS
var firstName = "Jesper";       // Global declaration of a variable, DO NOT DO THIS

let firstName2 = "Jesper";       // Local (scoped) declaration of a variable, DO THIS
// Let is only used where it is declared

let lastName = "Ekerling";
console.log(lastName);
lastName = "Jonas"             // Write over a variable (no starting thing)
console.log(lastName);


const PI = 3.141592653589793; // Use big letters since PI is constant


const email = "test@example.com";
console.log(email); */

/*
    Declare variables

    var = global variable = accessible everywhere
    let = local variable = accessible in the given area
    const = cannot be written over, but there is some examples of it

    C# example
        string name = "Joakim";
        let age = 34;

    JS example
        let name = "Joakim";
        let age = 34;
*/

/* 
console.warn('Varnning  hej hej hej');
console.error('.error() = Errooooooorrrhej');
 */

/* Change a queryselector in browser console:

document.querySelector('#main > div.hyperion-css-bxg8le > main > section > div:nth-child(4) > div.hyperion-css-5n031k > a > div.hyperion-css-1gs8giq > h2').innerText = 'hej tvåååå'

*/


/*
    Javsscript dataTypes

    String      =   text, 'abc2', '123123';
    Number      =   numbers, decimal numbers
    Boolean     =   True or False
    null        =   empty variable, manually set to empty string
    undefined   =   undefined variable, empty (automatically set to empty string)
    Object      =   contains one or more values
    Array       =   a list of values
*/

let dataType;

console.log(typeof dataType);

dataType = "en text";
console.log(typeof dataType);

dataType = 33;
console.log(typeof dataType);

dataType = () => dataType;
