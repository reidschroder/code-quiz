var quizButton = document.querySelector("#quiz-button")
var timer = 75
var quizTimer = document.querySelector("#quiz-timer")
var questionIndex = 0
var score = 0
var questionBoxElement = document.querySelector('#question-box')
var highscore = localStorage.getItem("highscore");
var containerEl = document.querySelector(".container")
var startQuizIntro = document.querySelector(".start-quiz-intro")


const scoresEl = document.querySelector("#scores");
const initialsEl = document.querySelector("#initials");
const submitInitialsBtnEl = document.querySelector("#submitInitials");
const clearScoresBtnEl = document.querySelector("#clearScores");
const goBackBtnEl = document.querySelector("#goBack");

// check for correct answer

function correctAnswer(answerBtn){
    //return answerBtn.textContent === question.answer;
    return answerBtn.textContent == questions[questionIndex]["answer"];
}

// check if answer is correct
function checkAnswer(event){
    let answerBtn = event.target; 
    // correct answer 
    if (correctAnswer(answerBtn)){
        score = score + 20;
    }
    // wrong answer 
    else {
        if (timer > 10){
            timer = timer - 10;
       }
       else{
           timer = 0;
           endQuiz();
       }
    }

    questionIndex++;

    // if no more questions, end quiz
    if (questionIndex < questions.length){
        displayQuestion();
    }
    else{
        endQuiz();
    }
}

function endQuiz() {
    let finalScore = document.querySelector("#scores")
    finalScore.textContent = "You scored " + score + "! Great Job!";

    document.querySelector("#quiz-timer").setAttribute("hidden", true);
    containerEl.classList.remove("hide")
}


var questions = [
    // add questions here!!
     // question 1
     {
        questionText:"HTML is considered as a  ____",
        options:["a. Programming Language", "b. Markup Language", "c. High Level Language", "d. Foreign Language"],
        answer:"b. Markup Language"
    },
    // question 2 
    {
        questionText:"If we want to set the style for just one element, which css selector will we use?",
        options:["a. id", "b. text", "c. class", "d. name"],
        answer:"a. id"
    },
    // question 3
    {
        questionText:"The HTML tag that specifies a CSS style embedded in an element is called ____?",
        options:["a. Design", "b. Define", "c. Modify", "d. Style"],
        answer:"d. Style"
    },
    // question 4 
    {
        questionText:"Which of the following HTML element is used for creating an unordered list?",
        options:["a. <li>", "b. <p>", "c. <ul>", "d. <ol>"],
        answer:"c. <ul>"
    },
    // question 5
    {
        questionText:"Which of the following attributes is used to add link to any element?",
        options: ["a. link", "b. ref", "c. href", "d. style"],
        answer: "c. href"
    }
];

var answerBtn0 = document.querySelector("#option0");
var answerBtn1 = document.querySelector("#option1");
var answerBtn2 = document.querySelector("#option2");
var answerBtn3 = document.querySelector("#option3");

var answers = [answerBtn0, answerBtn1, answerBtn2, answerBtn3]

// display questions
function displayQuestion() {
    let question = questions[questionIndex];
    let answerOptions = question.options;

    let questionEl = document.querySelector("#question");
    questionEl.textContent = question.questionText;

    

    for (var i = 0; i < answerOptions.length; i++) {
       let answerChoices = answerOptions[i];
    
        let answerBtn = answers[i];
        
        answerBtn.textContent = answerChoices;
        
    }



}




// timer countdown
function countdown() {
    var timeLeft = setInterval(() => {
        
        if (timer >= 0 || questionIndex < 5) {
            quizTimer.textContent = timer + " seconds left";
            timer --;
            
            
        }
        else {
            clearInterval(timeLeft);
        }
    }, 1000);
}


//Start function
function startQuiz() {
    var startQuizIntro = document.querySelector(".start-quiz-intro")
    startQuizIntro.setAttribute("class", "hide")
    
    questionBoxElement.classList.remove("hide")

    // reset timer and score
    userScore = 0;

    countdown();
    displayQuestion();
    
    
}
//reset quiz score 
function reset() {
    score = 0;
    currentQ = 0;
    secondsElapsed = 0;
    
}

function renderHighScores() {
    // Clear content
    scoresEl.innerHTML = "";
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let scoreItem = document.createElement("div");
        scoreItem.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].userScore}`;
        scoresEl.appendChild(scoreItem);
    }
}


submitInitialsBtnEl.addEventListener("click", function () {
    let initValue = initialsEl.value.trim();
    if (initValue) {
        let userScore = { username: initValue, userScore: score };
        initialsEl.value = '';
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        renderHighScores();
        reset();
    }
});

//Clear local storage
clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});



quizButton.addEventListener("click", startQuiz);

document.querySelector("#answer-buttons").addEventListener("click",checkAnswer);




