let anhball = null;
anhball = document.getElementById("ball");

function init() {
    anhball = document.getElementById("ball");
    anhball.style.position = "relative";
    anhball.style.left = "0px";
}

function moveRight() {
    anhball.style.left = parseInt(anhball.style.left) + 10 + "px";
}

window.onload = init;
