//console.log(document.forms);
regForm = document.querySelector('#regForm');
//console.log(regForm[0]);

regForm.addEventListener('submit', e => {
    e.preventDefault();

    const firstNameValue = regForm[0].value;
    const lastNameValue = regForm.lastName;
    const addressValue = document.querySelector('#address').value; // Teacher likes this way
    const roleValue = e.currentTarget.role.value;

    const user = {
        firstName: firstNameValue,
        lastNameValue: lastNameValue,
        address: addressValue,
        role: roleValue,
    }

    const terms = e.currentTarget.terms
    if(!terms.checked) return;
    console.log(terms.checked)
    console.log(user);
});