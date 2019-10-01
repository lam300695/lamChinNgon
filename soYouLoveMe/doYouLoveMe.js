function yes() {
    alert("<3");
}

function no() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("buttonno").style.left = x + "px";
    document.getElementById("buttonno").style.top = y + "px";
}
