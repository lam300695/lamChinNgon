function left() {
    let dichuyen = document.getElementById("nobita");
    dichuyen.style.top = parseInt(dichuyen.style.top) - 100 + "px";
}

function right() {
    let dichuyen = document.getElementById("nobita");
    dichuyen.style.top = parseInt(dichuyen.style.top) + 100 + "px";
}

function upto() {
    let dichuyen = document.getElementById("nobita");
    dichuyen.style.left = parseInt(dichuyen.style.left) - 100 + "px";
}

function downto() {
    let dichuyen = document.getElementById("nobita");
    dichuyen.style.left = parseInt(dichuyen.style.left) + 100 + "px";
}

function moveselect(evt) {
    switch (evt.keyCode) {
        case 37:
            upto();
            break;
        case 39:
            downto();
            break;
        case 38:
            left();
            break;
        case 40:
            right();
            break;
    }
}

function docReady() {
    window.addEventListener("keydown", moveselect);
}