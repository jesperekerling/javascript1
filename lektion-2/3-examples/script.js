const leftNames = ['Kalle', 'Pelle', 'Jesper', 'Pelle', 'Olle']
const rightNames = ["Kalle2", "Pelle", "Jesper", "Pelle", "Olle"]

const leftBox = document.getElementById('box');
const rightBox = document.getElementById('box-2');

function renderNames () {
    leftBox.innerHTML = ''
    rightBox.innerHTML = ''

    leftNames.forEach(function(name, i) {
        const p = document.createElement('p')
        p.classList.add('item')
        p.innerText = name

        p.addEventListener('click', function() {
            const name = leftNames.splice(i, 1)
            console.log(name)
            rightNames.push(name)
            renderNames()
        })
        leftBox.appendChild(p)
    });


    rightNames.forEach(function(name, i) {
        const p = document.createElement('p')
        p.classList.add('item')
        p.innerText = name

        p.addEventListener('click', function() {
            const name = rightNames.splice(i, 1)
            console.log(name)
            leftNames.push(name)
            renderNames()
        })
        rightBox.appendChild(p)
    });
}
renderNames()

const input = document.getElementById('input')
const btnLeft = document.getElementById('btn-l')
const btnRight = document.getElementById('btn-r')

btnLeft.addEventListener('click', function() {
    leftNames.unshift(input.value)
    input.value = ''
    renderNames()
})

btnRight.addEventListener('click', function() {
    rightNames.unshift(input.value)
    input.value = ''
    renderNames()
})