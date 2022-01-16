var quizButton = document.querySelector("#quiz-button")
var timer = 75
var quizTimer = document.querySelector("#quiz-timer")
var questionIndex = 0
var score = 0
var questionBoxElement = document.querySelector('#question-box')
var highscore = localStorage.getItem("highscore");



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
}


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
            //questionIndex ++;
            
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

    console.log(questionBoxElement);
    // reset timer and score
    userScore = 0;

    countdown();
    displayQuestion();
    
    
}



quizButton.addEventListener("click", startQuiz);

document.querySelector("#answer-buttons").addEventListener("click",checkAnswer);




