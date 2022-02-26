//var secret = Math.floor(Math.random() * 10) + 1;

var secret = 7;
document.getElementById("start").addEventListener("click", askInput);


function askInput() {
    var guessedNum = Number(prompt("Please guess a number between 1 and 10"));
    game(guessedNum);
}

function display() {
    document.getElementById("Result").innerHTML = "Congratulations... You have won!!";
}

function game(guess) {
    while (guess != null || guess > 10) {


        if (guess === secret) {
            display();
            break;

        } else if (guess < secret) {
            alert("Sorry, the number is too low!");
            askInput();
        } else if (guess > secret) {
            alert("Sorry, the number is too high!");
            askInput();
        } else {
            alert("Invalid input! Try again.");
            askInput();
        }
    }
}