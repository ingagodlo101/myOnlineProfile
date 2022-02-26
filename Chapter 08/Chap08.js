let car1 = { brand: " BMW ", model: " X4 Series ", year: " 2020 ", condition: " Excellent !!! " };

var carBrand = car1.brand;
var carModel = car1.model;
var carYear = car1.year;
var carCondition = car1.condition;

document.getElementById("brand").innerHTML = carBrand;
document.getElementById("model").innerHTML = carModel;
document.getElementById("year").innerHTML = carYear;
document.getElementById("condition").innerHTML = carCondition;