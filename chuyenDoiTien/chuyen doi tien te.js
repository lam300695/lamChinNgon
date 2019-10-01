function chuyendoitiente() {
    let amout = document.getElementById("Amout").value;
    amout = parseInt(amout);

    let resual;
    let tien1 = document.getElementById("from-currency").value;
    let tien2 = document.getElementById("to-currency").value;
    if (tien1 === tien2) {
        resual = amout;
    } else if (tien1 === "USD" && tien2 === "VND") {
        resual = amout * 23000;
    } else {
        resual = amout / 23000;
    }

    console.log(resual);
    document.getElementById("ketqua").value = resual;

}