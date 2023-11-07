const regForm = document.querySelector('#regForm');
regForm.addEventListener('submit', e => {
    e.preventDefault();

    validateText('firstName')
    validateText('lastName')
    //validateFirstName()
    //validateLastName()
});


function validateText(id) {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(id + '-error');

    if (input.value.trim() === '') {
            errorElement.textContent = 'Please enter'
    }
    else if (firstName.value.trim().length < 2) {
        errorElement.textContent = 'more text '
    }
    else {
        errorElement.textContent = ''
    }

}


function validateFirstName() {
    const firstName = document.querySelector('#firstName');
    const firstNameError = document.querySelector('#firstName-error');

    if (firstName.value.trim() === '') {
        const firstNameError = document.querySelector('#firstName-error');
        firstNameError.textContent = 'Please enter'
    }
    else if (firstName.value.trim().length < 2) {
        firstNameError.textContent = 'more text '
    }
    else {
        firstNameError.textContent = ''
    }

}

function validateLastName() {
    const lastName = document.querySelector('#lastName');
    const lastNameError = document.querySelector('#lastName-error');

    if (firstName.value.trim() === '') {
        const lastNameError = document.querySelector('#lastName-error');
        lastNameError.textContent = 'Please enter'
    }
    else if (lastName.value.trim().length < 2) {
        lastNameError.textContent = 'more text '
    }
    else {
        lastNameError.textContent = ''
    }

}