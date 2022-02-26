var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter the first Item");
    item2 = prompt("Enter the Second Item");
    item3 = prompt("Enter the Third Item");
    item4 = prompt("Enter the Fourth Item");
    item5 = prompt("Enter the Fifth Item");
    item6 = prompt("Enter the Sixth Item");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("h").innerHTML = item4;
    document.getElementById("i").innerHTML = item5;
    document.getElementById("j").innerHTML = item6;
}