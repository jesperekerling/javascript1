
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
}
);