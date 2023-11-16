const form = document.querySelector('#createForm')

form.addEventListener('submit', e => {
    e.preventDefault()
    const errors = []

    validate(form['title'])
    validate(form['imgUrl'])
    validate(form['categories'])
    validate(form['author'])
    validate(form['body'])

    for(let i = 0; i < form.length; i++){
        if(form[i].type === 'submit') break;
        errors.push(validate(form[i]))
    }
    if(errors.includes(false)) return

    createPost()
    console.log('Create post successfully')
})

function validate(input) {
    const parent = input.parentElement

    if(input.value.trim() === '') {
        parent.classList.add('invalid')
        parent.querySelector('.error').textContent = "This field is required"
        return false
    }
    else {
        parent.classList.remove('invalid')
        return true
    }
}

function createPost() {
    const title = document.querySelector('#title').value
    const imgUrl = document.querySelector('#imgUrl').value
    const categories = document.querySelector('#categories').value
    const author = document.querySelector('#author').value
    const body = document.querySelector('#body').value

}