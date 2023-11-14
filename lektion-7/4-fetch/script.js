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


/* const updatePost = (e) => {
    console.log(e.target.dataset.postid)

    fetch('https://jsonplaceholder.typicode.com/posts' + e.target.dataset.postid, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Updated post',
            body: 'This is an updated post',
            userId: 1
        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.querySelector('#post',+data.id).textContent = data.title
        })
    })
} */

// updatePost()


const updatePost2 = (e) => {
    console.log(e.target.dataset.postid)

    fetch('https://jsonplaceholder.typicode.com/posts' + e.target.dataset.postid, {
        method: 'PACTH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Patched post'
        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.querySelector('#post',+data.id).textContent = data.title
        })
    })
}
updatePost2()

/* const updatePost3 = (e) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' + e.target.dataset.postid, {
        method: 'PACTH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Patched post'
        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.querySelector('#post',+data.id).textContent = data.title
        })
    })
}
updatePost3() */

console.log(res)



// DELETE

const deletePost = (e) => {
    fetch('https://jsonplaceholder.typicode.com/posts' + e.target.dataset.postid, {
        method: 'DELETE'
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        //document.querySelector('#post',+data.id).remove()
        e.target.remove()
    })
}

const deletePost1 = async (e) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' + e.target.dataset.postid, {
        method: 'DELETE'
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    e.target.remove()
}