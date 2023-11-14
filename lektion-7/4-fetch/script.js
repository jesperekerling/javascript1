//GET

//Gets the data from the API, un-encrypted

const output = document.querySelector('#out')
const posts = []
const btn = document.querySelector('#btn')

// Fetch with .then
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


// Fetch with async/await
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if(res.status !== 200) {
        console.log('errorrr')
        return
    }
    const data = await res.json()
    data.forEach(post => {
        posts.push(post)
    })
    posts.forEach(post => {
        output.insertAdjacentHTML('beforeend', `<li data-postid="${post.id}" id="${post.id}">${post.title}</li>`)

    })
}


getPosts()


//POST
// Adds data encrypted in a body

const post = {
    title: 'New post',
    body: 'This is a new postzz',
    userId: 1
}

 const addPost1 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post)
    })
    .then(res => {
        // error management
        return res.json()
    })
    .then(data => {
        console.log(data)
        output.insertAdjacentHTML('beforeend', `<li data-postid="${post.id}" id="${post.id}">${post.title}</li>`)
        document.querySelector(`#${post.id}`).addEventListener('click', updatePost)
    })
}


const addPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post)
    })

    // error management
    const data = await res.json()

    console.log(data)
    output.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`)
}

btn.addEventListener('click', addPost1)




// PUT
// Updates data encrypted in a body


const updatePost = (e) => {
    console.log(e.target.dataset.postid)
}