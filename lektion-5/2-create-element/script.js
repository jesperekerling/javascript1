const commentForm = document.querySelector('#comment-form');
const commentsDiv = document.querySelector('#comments')

/*

commentsDiv.addEventListener('click', e => {
    console.log(e.target.nodeName)
    if (e.target === e.currentTarget) return

    if (e.target.nodeName === 'P') {
        e.target.parentNode.classList.add('active')
    }
    else {
        e.target.classList.add('active')
    }
});

*/

commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('#comment-input')

    if (input.value.trim() === '') return
    const newId = crypto.randomUUID()

/*
    commentsDiv.innerHTML += `
    <div id="${newId}" class="comment">
        <p>${input.value}</p>
    </div>
    `
*/

    // insertAdjacentHTMl ger mer möjligheter än innerHTML
    // commentsDiv.insertAdjacentHTML('beforeend', `
    // <div id="${newId}" class="comment">
    //     <p>${input.value}</p>
    // </div>
    // `)
    // input.value = ''
    
    // document.getElementById(newId).addEventListener('click', e => {
    //     e.currentTarget.classList.add('active')
    // });

});



// Create Element
commentForm.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('#comment-input');
    if(input.value.trim() === '') return

    const comment = document.createElement('div')
    comment.classList.add('comment')
    comment.addEventListener('click', e => {
        comment.classList.add('active')
    });

    const commentText = document.createElement('p')
    commentText.textContent = input.value

    comment.appendChild(commentText)
    commentsDiv.appendChild(comment)

    input.value = ''

})