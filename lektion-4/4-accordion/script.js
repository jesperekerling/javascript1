const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        //question.nextElementSibling.
    //question.nextElementSibling.className = 'open'
    const parent = question.parentElement;
    console.log(parent.querySelector('.answer'))
    parent.querySelector('.answer').classList.toggle('open')

        document.querySelectorAll('.answer').forEach((answer) => {
            if (answer !== parent.querySelector('.answer')) {
                answer.classList.remove('open');
            }
        })
    }) })
