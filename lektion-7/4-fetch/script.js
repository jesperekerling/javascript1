//GET

//Gets the data from the API, un-encrypted

const output = document.querySelector('#out')
const posts = []

/* const getPosts = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {

            data.forEach(post => {
                posts.push(post)
            })
            console.log(posts)
            posts.forEach(post => {
                output.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`)
            })
     })
    }
 */

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    data.forEach(post => {
        posts.push(post)
    })
    console.log(posts)
    posts.forEach(post => {
        output.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`)
    })
}


getPosts()