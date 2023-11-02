
const btn = document.querySelector("#btn");


function alert1() {
    console.log(event);
}

/* btn.addEventListener("click", alert1(2));
btn.removeEventListener("click", alert1(2));


btn.addEventListener("click", () => {
    console.log('Test');
}   ); */

btn.addEventListener("click", () => {
    console.log("Button cliked");
}   );

btn.addEventListener("mousedown", () => {
    console.log("Button pressed");
}   );

btn.addEventListener("mouseup", () => {
    console.log("Button pressed up");
}   );

btn.addEventListener("mouseover", () => {
    console.log("Button hovered");
}   );

btn.addEventListener("mouseenter", () => {
    console.log("Button entered");
}   );
btn.addEventListener("mouseleave", () => {
    console.log("Button left");
}   );

const square = document.querySelector("#square");
square.addEventListener("mousemove", event => {
    square.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 100)`;
});

/* const username = document.querySelector("#username");
console.log(username);

username.addEventListener("keyup", () => {
    console.log(username);
}   );



username.addEventListener('focus', e () => { 
    console.log(e)
    username.classList.add("focus-red")
}   );


 */

document.querySelector('#link').addEventListener("click", e => {
    e.preventDefault();
    console.log("Link clicked, but redirects to wrong page");
    window.location.href ="https://www.google.com"
}   );

document.querySelector('#loginForm').addEventListener("click", e => {
    e.preventDefault();
    if(username.value === "") {
        console.log("Username is empty");
    }   }   );
    