let weight = document.getElementById("displayweight").value;
weight = parseInt(weight);
let height = document.getElementById("displayheight").value;
height = parseInt(height);

function tinhtoan() {
    let x = document.getElementById("test");
    let bmi = ((weight / height) / height);
    console.log(bmi);
    document.getElementById("test").value = bmi;
    if (bmi < 18) {
        x.innerHTML = "underweight";
    } else if (18 < bmi < 25.0) {
        x.innerHTML = "normal";
    } else if (20 < bmi < 30.0) {
        x.innerHTML = "overweight";
    } else {
        x.innerHTML = "obese";
    }
}