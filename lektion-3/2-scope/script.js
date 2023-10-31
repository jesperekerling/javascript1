let age = 36; // global scope
console.log('Outside code blocks ' + age)

{
    let age = 50;
    let fName = 'Joakim'; // local scope
    // var fName = 'Joakim'; // global scope

    console.log('Inside first code block', age, fName)


    {
        console.log("first code block", age, fName)
    }
}

console.log('Outside code blockss ' + age);

{
    let fName = 'Hans';
    console.log(fName)
}