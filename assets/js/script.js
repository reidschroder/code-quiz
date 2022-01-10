var quizButton = document.querySelector("#quiz-button")
var timer = 75
var quizTimer = document.querySelector("#quiz-timer")
var questionIndex = 0

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

function displayQuestion() {
    questionIndex;
    console.log(questions[questionIndex]);
}

function countdown() {
    var timeLeft = setInterval(() => {
        
        if (timer >= 0) {
            quizTimer.textContent = timer + " seconds left";
            timer --;
            
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
    // reset timer and score
    userScore = 0;

    countdown();
    displayQuestion();
}

// One Line to call one function
quizButton.addEventListener("click", startQuiz);