var txtBrand = document.getElementById("txtBrand");
var txtModel = document.getElementById("txtModel");
var txtMilage = document.getElementById("txtMilage");
var txtPrice = document.getElementById("txtPrice");


var output = document.getElementById("txt");

document.getElementById("myBtn").onclick = displayCar;

function displayCar() {


    var txtBrand1 = txtBrand.value;
    var txtModel1 = txtModel.value;
    var txtMilage1 = txtMilage.value;
    var txtPrice1 = txtPrice.value;


    output.innerHTML = "This is " + txtBrand1 + txtModel1 + " with " + txtMilage1 + "KM going for " + txtPrice1 + ".";


}