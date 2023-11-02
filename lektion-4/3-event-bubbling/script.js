const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');


// Bubbeling

// e.target = the element that we clicked on
// e.currentTarget = the element that the event listener is attached to

btn.addEventListener('click', function (e) {
    console.log('btn target: ', e.target);
    console.log('btn currentTarget: ', e.currentTarget);
});

div1.addEventListener('click', function (e) {
    console.log('div1 target: ', e.target);
    console.log('div1 currentTarget: ', e.currentTarget);
});

div2.addEventListener('click', function (e) {
    console.log('div2 target: ', e.target);
    console.log('div2 currentTarget: ', e.currentTarget);
}, true); 

document.body.addEventListener('click', function (e) {
    console.log('body target: ', e.target);
//    console.log('body currentTarget: ', e.currentTarget);

    if(e.target === btn) {
        console.log('btn was clicked');
    }
});

/* 
const names = ['Mahmud', 'Kalle', 'Erik', 'Sven'];
const output = document.querySelector('#output');

names.forEach(function (name) {
document.querySelector('#output').innerHTML  += '<ul>';
document.querySelector('#output').innerHTML  += '<li>' + name + '</li>';
document.querySelector('#output').innerHTML  += '</ul>';
}   );

output.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.remove()
}); */


// Capture phase is body --> div2 --> div1 --> btn
// Bubbling phase is btn --> div1 --> div2 --> body


const user = document.querySelector('.user');
const userBtn = document.querySelector('.user-btn');

user.addEventListener('click', function (e) {
    user.classList.toggle('active');
}  );  
userBtn.addEventListener('click', function (e) {
    user.style.border = '3px solid red';
}   );

// stop bubbling
// e.stopPropagation(); 
// prevent bubbling and default behaviour