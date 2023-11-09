const regForm = document.querySelector('#regForm')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')
const terms = document.querySelector('#terms')
//const submitBtn = document.querySelector('#submit-btn')

regForm.addEventListener('submit', e => {
    e.preventDefault()

    validateText(firstName)
    validateText(lastName)
    validateText(email)

})


function setError(input, message) {
    const parent = input.parentElement;
    parent.classList.add('.is-invalid')
    parent.classList.remove('.is-valid')
    const errorElement = parent.querySelector('.invalid-input')
    errorElement.innerText = message
}
function setSuccess(input) {
    const parent = input.parentElement;
    parent.classList.remove('.is-invalid')
    parent.classList.add('.is-valid')
}

function validateText(input) {
    if(input.value.trim() === '') {
        setError(input, `Name cant be empty`)
        return
    }
    else if (input.value.length <= 2) {
        setError(input, `Name must be at least 2 characters long`)
        return
    }
    
        // success
    
    setSuccess(input)

}

function validateEmail(email) {
    if(email.value.trim() === '') {
        setError(email, `Email cant be empty`)
        return
    }
    else if (input.value.length <= 5) {
        setError(email, `Email must be at least 5 characters long`)
        return
    }
    else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        setError(email, `Email must be a valid email address`)
        return
    }
    
    setSuccess(email)
}