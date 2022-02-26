var textBox = document.getElementById("txtBox");
var output = document.getElementById("txt");

document.getElementById("myBtn").onclick = displayName;

function displayName() {
    var input = textBox.value;
    output.innerHTML = "My name is " + input + ".";


}