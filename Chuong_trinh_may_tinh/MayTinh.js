function cong() {
    let sothunhat = document.getElementById("sothunhat").value;
    sothunhat = parseInt(sothunhat);
    let sothuhai = document.getElementById("sothuhai").value;
    sothuhai = parseInt(sothuhai);
    let resual;
    resual = sothunhat + sothuhai;
    console.log(resual);
    document.getElementById("ketqua").value = resual;
}

function tru() {
    let sothunhat = document.getElementById("sothunhat").value;
    sothunhat = parseInt(sothunhat);
    let sothuhai = document.getElementById("sothuhai").value;
    sothuhai = parseInt(sothuhai);
    let resual;
    resual = sothunhat - sothuhai;
    console.log(resual);
    document.getElementById("ketqua").value = resual;
}

function nhan() {
    let sothunhat = document.getElementById("sothunhat").value;
    sothunhat = parseInt(sothunhat);
    let sothuhai = document.getElementById("sothuhai").value;
    sothuhai = parseInt(sothuhai);
    let resual;
    resual = sothunhat * sothuhai;
    console.log(resual);
    document.getElementById("ketqua").value = resual;
}

function chia() {
    let sothunhat = document.getElementById("sothunhat").value;
    sothunhat = parseInt(sothunhat);
    let sothuhai = document.getElementById("sothuhai").value;
    sothuhai = parseInt(sothuhai);
    let resual;
    resual = sothunhat / sothuhai;
    console.log(resual);
    document.getElementById("ketqua").value = resual;
}