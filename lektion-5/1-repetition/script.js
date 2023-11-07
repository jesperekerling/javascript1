let id = "divven"

const div = document.getElementById(id);
const divven = document.querySelector('#divven')
const divs = document.querySelectorAll('div')

console.log(divs)


divven.textContent = "Det här är en ny text" // Manipulation of dom elements

const button = document.querySelector('button')

function handleClick() {
    console.log('handle click')
}
button.addEventListener('click', () => {
    console.log('inline function')
})

button.addEventListener('click', handleClick)
button.removeEventListener('click', handleClick)


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
console.log('validating')

//    e.target.submit()
})

document.body.addEventListener('click', (e) => {
    console.log('CLIKED')
    console.log(e.target)
    console.log('currentTarget: ' + e.currentTarget)
})
