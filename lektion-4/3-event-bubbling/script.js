const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');


// Bubbeling

// e.target = the element that we clicked on
// e.currentTarget = the element that the event listener is attached to

/* btn.addEventListener('click', function (e) {
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
}); */

document.body.addEventListener('click', function (e) {
    console.log('body target: ', e.target);
//    console.log('body currentTarget: ', e.currentTarget);

    if(e.target === btn) {
        console.log('btn was clicked');
    }
});