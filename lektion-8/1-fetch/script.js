
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

//fetchPosts();

function renderPosts () {
    const output = document.querySelector('#output')
    output.innerHTML = ''

    posts.forEach(post => {
        output.appendChild(createPostElement(post))
/*        output.innerHTML += `
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
    */
    })
}

function createPostElement(post) {
    const postDiv = createCustomElement('div','post')

    const imgContainer = createCustomElement('div','img-container')
    const img = createCustomElement('img')
    img.setAttribute('src', post.imgUrl)
    imgContainer.appendChild(img)
    postDiv.appendChild(imgContainer)

    const contentDiv = createCustomElement('div','content')
    const contentTitle = createCustomElement('h2', 'content_title', post.title)

    const info = createCustomElement('div', 'info')
    const categories = createCustomElement('ul', 'categories')
    post.categories.forEach(cat => {
        const categoryLi = createCustomElement('li','', cat)
        categories.appendChild(categoryLi)
    })
    const author = createCustomElement('p','', 'Author'+post.author)
    info.append(categories, author)
    
    const bodyDiv = createCustomElement('p', 'post_body', post.body.slice(0,100) + '...')
    const link = createCustomElement('a','btn btn-primary bottom-right', 'Read more')


    contentDiv.append(contentTitle, info, bodyDiv, link)
    postDiv.append(contentDiv)

    return postDiv
}


function createCustomElement(type, classList, text) {
    const el = document.createElement(type)
    if(classList && classList.length > 0) {
        el.className = classList
    }
    if(text) {
        el.textContent = text
    }
    return el

}