const leftNames = ['Kalle', 'Pelle', 'Jesper', 'Pelle', 'Olle']
const rightNames = ["Kalle2", "Pelle", "Jesper", "Pelle", "Olle"]

const leftBox = document.getElementById('box-1');
const rightBox = document.getElementById('box-2');

function renderNames () {
    leftBox.innerHTML = ''
    rightBox.innerHTML = ''

    leftNames.forEach(name => {
        const p = document.createElement('p')
        p.classList.add('item')
        p.innerText = name

        leftBox.appendChild(p)
    });
}