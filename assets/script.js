//Checks that the Dom has loaded before running the quiz
//Adds event listeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswers(), House();
            } else if (this.getAttribute("id") === "btn--red") {
                displayGryffindor();
            } else if (this.getAttribute("id") === "btn--yellow") {
                displayHufflepuff();
            } else if (this.getAttribute("id") === "btn--blue") {
                displayRavenclaw();
            } else if (this.getAttribute("id") === "btn--green") {
                displaySlytherin();
            }
        })
    }
})

//This sets the variable of house to allow running of alert to ask user to choose house.
var house = "unknown";

/**
 * This checks that a Hogwarts house has been selected and if not
 * alerts the user to choose one.
 */
function House() {
        if (house === "unknown"){
            alert(`Please choose your Hogwarts House`);
        }
    }

/**
 * This checks the user's answers against the correct answers and
 * awards points to Correct/Incorrect Answer tally.
 */
function checkAnswers() {
    let userAnswer1 = parseInt(document.getElementById("q1-answer-box").value)
    let correctUserAnswer1 = "713"
    if (userAnswer1 === correctUserAnswer1) {
        increaseCorrect();
    } else {
        increaseIncorrect();
    }
}

/**
 * This adds 1 to the Correct Answers tally each time an answer is correct.
 */
function increaseCorrect() {
    let previousScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("score").innerText = ++previousScore;
}

/**
 * This adds 1 to the Incorrect Answers tally each time an answer is incorrect.
 */
function increaseIncorrect() {
    let previousScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++previousScore;
}

/**
 * This changes the background of the quiz area to red to match
 * the house colours of Gryffindor, sets house to Gryffindor.
 */
function displayGryffindor() {
    document.getElementById("quiz-area").style.backgroundColor = "red";
    house = "Gryffindor";
    console.log(house);
}

/**
 * This changes the background of the quiz area to yellow to match
 * the house colours of Hufflepuff, sets house to Hufflepuff.
 */
function displayHufflepuff() {
    document.getElementById("quiz-area").style.backgroundColor = "yellow";
    house = "Hufflepuff";
    console.log(house);
}

/**
 * This changes the background of the quiz area to blue to match
 * the house colours of Ravenclaw, sets house to Ravenclaw.
 */
function displayRavenclaw() {
    document.getElementById("quiz-area").style.backgroundColor = "lightskyblue";
    house = "Ravenclaw";
    console.log(house);
}

/**
 * This changes the background of the quiz area to light-green to match
 * the house colours of Slytherin, sets house to Slytherin.
 */
function displaySlytherin() {
    document.getElementById("quiz-area").style.backgroundColor = "lightgreen";
    house = "Slytherin";
    console.log(house);
}