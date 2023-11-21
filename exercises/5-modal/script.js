const openBtn = document.querySelector('#open-btn')
const.closeBtn = document.querySelector('#close-btn')
const modal = document.querySelector('#modal')
const modalBg = document.querySelector('#modal-bg')

openBtn.addEventListener('click', e => {
    modal.classList.add('open')
})

function closeModal() {
    modal.classList.remove('open')    
}

modalBg.addEventListener('click', closeModal)