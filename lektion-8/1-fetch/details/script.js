

console.log(window.location)

const img = document.querySelector('#img')
const title = document.querySelector('#title')
const categories = document.querySelector('#categories')
const author = document.querySelector('#author')
const body = document.querySelector('#body')

const id = new URLSearchParams(window.location.search).get('id')
// Parameter har endast / efter, medan ?q= är en variabel

const getPost = async () => {
    let url = `http://localhost:3000/posts/${id}`

    const res = await fetch(url)

    if(res.status !== 200) return
    
    const post = await.res.json()

    img.src = post.imgUrl
    title.textContent = post.title
    author.textContent = `Author: ${post.author}`
    body.innerHTML = post.body

    post.categories.forEach(cat => {
        const categoryLi = createCustomElement('li','', cat)
        categories.appendChild(categoryLi)
        categoryLi.addEventListener('click', () => {
            window.location.assign(`./?search=${cat}`)
        })
    })
}


getPost()