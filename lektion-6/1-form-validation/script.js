const regForm = document.querySelector('#regForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeat-password')
const checkBox = document.querySelector('#terms')
//const submitBtn = document.querySelector('#submit-btn')

regForm.addEventListener('submit', e => {
    e.preventDefault()


    validateForm()
  
    /*
    if(
        validateText(firstName) &&
        validateText(lastName) &&
        validateText(email) &&
        validatePassword(password, repeatPassword) &&
        validateCheck(terms)
    ) {
        console.log('Form sent222!')
    }
    console.log('Form sent!')
    */
})


function validateForm(){
    validateText(firstName)
    validateText(lastName)
    validateEmail(email)
    validatePassword(password, repeatPassword)
    validateCheck(terms)

    errors = []

    for(let i = 0; i < regForm.length; i++) {
        console.log(regForm[i])
        errors[i] = validate(regForm[i])
    }
}

function validate(input) {
    switch(input.type) {
        case 'text':
            validateText(input)
            break
        case 'email':
            validateEmail(input)
            break
        case 'password': return input.id === 'password' ? validatePassword(input) : samePassword(password, repeatPassword)
            break
        case 'checkbox':
            validateCheck(input)
            break
        default:
            break;
    }
}


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
    else if (input.value.length < 2) {
        setError(input, `Name must be at least 2 characters long`)
        return
    }
    
        // success
    
    setSuccess(input)

}

function validateEmail(email) {
    if(email.value.trim() === '') {
        setError(email, `Email cant be empty`)
        return false
    }
    else if (email.value.length <= 5) {
        setError(email, `Email must be at least 5 characters long`)
        return false
    }
    else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        setError(email, `Email must be a valid email address`)
        return true
    }
    
    setSuccess(email)
}

function validatePassword(password) {
    if(password.value.trim() === '') {
        setError(password, `Password cant be empty`)
        return false
    }
    else if (!/^(?=.*\d).{5,}$/.test(password.value)) {
        setError(password, `Password must be at least 5 characters long and contain at least 1 digit`)
        return false
    }

    // Sucess
    setSuccess(password)
    return true
}


function samePassword(password, repeatPassword) {
    if(password.value !== repeatPassword.value) {
        setError(repeatPassword, `Passwords must match`)
        return false
    }
    else if (password.value.trim() === '') {
        setError(repeatPassword, `Password cant be empty`)
        return false
    }
    setSuccess(repeatPassword)
    return true
}

function validateCheck(checkBox) {
    if(checkBox.checked === false) {
        setError(checkBox, `You must accept the terms`)
        return
    }
}