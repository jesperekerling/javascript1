
let posts = []
const fetchPosts = async () => {
    try {
        const res = await fetch('http://localhost:3000/posts')

        if (res.status !== 200) {
            throw new Error('Somthing went wrong')
        }

        const data = await res.json()
        posts = data

        renderPosts(); // Skriver ut posts

    }
    catch (error) {
        console.log(error.message)
    }
}

fetchPosts();

function renderPosts () {
    const output = document.querySelector('#output')
    output.innerHTML = ''

    posts.forEach(post => {
        output.innerHTML += `
        <div class="post">
        <div class="img-container">
            <img src="${post.imgUrl}" alt="Hej hopp" width="800">
        </div>
        <div class="content">
            <h2 class="content_title">${post.title}</h2>
            <div class="info">
                <ul class="categories">
                    <li>${post.categories}</li>
                    <li>JavaScript</li>
                </ul>
                <p>Author: ${post.author}</p>
            </div>
            <p class="post_body">${post.body}</p>
            <a href="#" class="btn btn-primary bottom-right">Read more</a>
        </div>
    </div>`
    })
}
