var quizButton = document.querySelector("#quiz-button")
var timer = 75
var quizTimer = document.querySelector("#quiz-timer")
var questionIndex = 0
var score = 0
var questionBoxElement = document.getElementById('question-box')

var questions = [
    // add questions here!!
     // question 1
     {
        questionText:"This is question 1",
        options:["a. answer", "b. correct", "c. answer", "d. answer"],
        answer:"b. correct"
    },
    // question 2 
    {
        questionText:"this is question 2",
        options:["a. correct", "b. answer", "c. answer", "d. answer"],
        answer:"a. correct"
    },
    // question 3
    {
        questionText:"This is question 3",
        options:["a. answer", "b. answer", "c. answer", "d. correct"],
        answer:"d. correct"
    },
    // question 4 
    {
        questionText:"this is question 4",
        options:["a. answer", "b. answer", "c. correct", "d. answer"],
        answer:"c. correct"
    },
    // question 5
    {
        questionText:"this is question 5",
        options: ["a. answer", "b. answer", "c. correct", "d. answer"],
        answer: "c. correct"
    }
];
// display questions
function displayQuestion() {
    let questions = questions[questionIndex];

    let questionEl = document.querySelector("question-box");
    questionEl.textContent = question.questionText;


    questionIndex;
}
// timer countdown
function countdown() {
    var timeLeft = setInterval(() => {
        
        if (timer >= 0 && questionIndex < 5) {
            quizTimer.textContent = timer + " seconds left";
            timer --;
            questionCount ++;
            
        }
        else {
            clearInterval(timeLeft);

            // call game over function
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

// One Line to call one function
quizButton.addEventListener("click", startQuiz);