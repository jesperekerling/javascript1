const regForm = document.querySelector('#regForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordRepeat = document.querySelector('#repeat-password')
const terms = document.querySelector('#terms')
//const submitBtn = document.querySelector('#submit-btn')

regForm.addEventListener('submit', e => {
    e.preventDefault()

    validateText(firstName)
    validateText(lastName)
    validateText(email)
    validatePassword(password)
})


function setError(input, message) {
    console.log(1)

    const parent = input.parentElement;
    console.log(parent)
    parent.classList.add('is-invalid')
    parent.classList.remove('is-valid')
    const errorElement = parent.querySelector('.invalid-input')
    errorElement.innerText = message
}
function setSuccess(input) {
    const parent = input.parentElement;
    parent.classList.remove('is-invalid')
    parent.classList.add('is-valid')
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
    else if (email.value.length <= 5) {
        setError(email, `Email must be at least 5 characters long`)
        return
    }
    else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        setError(email, `Email must be a valid email address`)
        return
    }
    
    setSuccess(email)
}

function validatePassword(password) {
    if(password.value.trim() === '') {
        setError(password, `Password cant be empty`)
        return
    }
    else if (!/^(?=.*\d).{5,}$/.test(password.value)) {
        setError(password, `Password must be at least 5 characters long and contain at least 1 digit`)
        return
    }

    // Sucess
    setSuccess(password)
}


function samePassword(password, repeatPassword)