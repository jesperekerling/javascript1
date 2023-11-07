const regForm = document.querySelector('#regForm');
regForm.addEventListener('submit', e => {
    e.preventDefault();

    const errors = []

    errors.push(validateText('firstName'))
    errors.push(validateText('lastName'))

    
    //validateFirstName()
    //validateLastName()
});

if (validateText('firstName') && validateText('lastName')) {
    const user = {
        firstName: regForm.firstName.value,
        lastName: regForm.lastName.value,
    }
    console.log(user);
}




function validateText(id) {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(id + '-error');

    if (input.value.trim() === '') {
        errorElement.textContent = 'Please enter'
        return false
    }
    else if (input.value.trim().length <= 2) {
        errorElement.textContent = 'more text '
        return false
    }
    else {
        errorElement.textContent = ''
        return true
    }

}


function validateFirstName() {
    const firstName = document.querySelector('#firstName');
    const firstNameError = document.querySelector('#firstName-error');

    if (firstName.value.trim() === '') {
        const firstNameError = document.querySelector('#firstName-error');
        firstNameError.textContent = 'Please enter'
    }
    else if (firstName.value.trim().length <= 2) {
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
    else if (lastName.value.trim().length <= 2) {
        lastNameError.textContent = 'more text '
    }
    else {
        lastNameError.textContent = ''
    }

}