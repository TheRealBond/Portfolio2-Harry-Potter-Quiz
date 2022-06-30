//let DOM load before running the quiz game
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswers(), House(house);
        } else if (this.getAttribute("data-type") === "gryffindor") {
            displayGryffindor();
        }
    }}

/**
 * This checks that a Hogwarts house has been selected and if not
 * alerts the user to choose one.
 */
function House(house) {
        if (house === "unknown"){
            alert(`Please choose your Hogwarts House`);
        }
    }

/**
 * This checks the user's answers against the correct answers and
 * awards points to Correct/Incorrect Answer tally.
 */
function checkAnswers() {

}

/**
 * This changes the background of the quiz area to red to match
 * the house colours of Gryffindor, sets house to Gryffindor.
 */
function displayGryffindor() {
    document.getElementById("quiz-area").style.backgroundColor = red;
    let house = "Gryffindor";
}

/**
 * This changes the background of the quiz area to yellow to match
 * the house colours of Hufflepuff, sets house to Hufflepuff.
 */
function displayHufflepuff() {

}
/**
 * This changes the background of the quiz area to blue to match
 * the house colours of Ravenclaw, sets house to Ravenclaw.
 */
function displayRavenclaw() {

}

/**
 * This changes the background of the quiz area to light-green to match
 * the house colours of Slytherin, sets house to Slytherin.
 */
function displaySlytherin() {

}