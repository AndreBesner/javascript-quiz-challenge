// /* this is the array for the question objects. Each question object has a questions, answers, and final answer.*/
var questionArray = [
    // arrays question
    {
        question : "How do you store multiple variables with JavaScript?",
        answers : ["Ashtrays", "Arrays", "Astrays", "Afraids"],
        answer : 1,
    },
    // objects quesion
    {
        question : "How do you describe a thing with multiple characteristics, like these questions?",
        answers : ["Orfects", "Ejects", "Elects", "Objects"],
        answer : 3, 
    },
    // variables question
    {
        question : "What do you use to store singular pieces of information, like a number or name?",
        answers : ["Lets", "Doofensmurtz", "Variables", "Terribles"],
        answer : 2, 
    },
     // naming conventions
    {
        question : "How do you type a good variable name?",
        answers : ["camelCase", "ALLCAPS", "allloweralways", "lIkEtHiS"],
        answer : 0, 
    },

];
   




var startButton = document.querySelector("#start-button");
startButton.addEventListener('click', startGame);
function startGame(){
    timeDecrease();
    showQuestions();
}
var userTimeRemaining = 60 ;
function timeDecrease(){
    timer = setInterval(()=>{
        userTimeRemaining -= 1 ;
        document.querySelector("#time-left").innerHTML = userTimeRemaining ;
        console.log(userTimeRemaining);
        if(userTimeRemaining <= 0 || currentQuestionIndex == 4){
            clearInterval(timer);
            endGame();
        }
    }, 1000)
}
var quizBoxStartPage = document.querySelector("#quiz-box-start-page");
var quizBoxQuestionsPage = document.querySelector("#quiz-box-questions-page");
var displayQuestion = document.querySelector("#display-question");
var displayAnswers = document.querySelector("#display-answers");
var currentQuestionIndex = 0 ;
function showQuestions(){
    if(currentQuestionIndex == 4){
        return;
    }        
        quizBoxStartPage.style.display = "none";
        quizBoxQuestionsPage.style.display = "block";
        displayQuestion.innerHTML = questionArray[currentQuestionIndex].question;
        showResponses();
}
function showResponses(){
    var responses = questionArray[currentQuestionIndex].answers;
    for(var i = 0 ; i < responses.length ; i++){
        var response = responses[i];
        var makeButton = document.createElement("button");
        makeButton.textContent = response;
        makeButton.addEventListener("click", function(e){
            // console.log(e.target.innerText);
            checkAnswer(e.target.innerText);
        });
        displayAnswers.appendChild(makeButton);
    }
}
var userScore = 0;
function checkAnswer(userSelected){
    var correctAnswerIndex = questionArray[currentQuestionIndex].answer
    var correctAnswer = questionArray[currentQuestionIndex].answers[correctAnswerIndex];
    // console.log(correctAnswer);
    // console.log(correctAnswerIndex);
    if(userSelected == correctAnswer){
        console.log("wow it works");
        userScore++;
        // console.log(userScore);
    }
    else{
        console.log("wrong");
        userTimeRemaining -= 5 ;
        console.log(userTimeRemaining);
    }
    displayQuestion.innerHTML = "";
    displayAnswers.innerHTML = "";
    currentQuestionIndex++;
    showQuestions();
}
var quizBoxEndPage = document.querySelector("#quiz-box-end");
var displayUserScore = document.querySelector("#display-user-score")
function endGame(){
    console.log("Your score was: " + userScore);
    quizBoxQuestionsPage.style.display = "none";
    quizBoxEndPage.style.display = "block";
    displayUserScore.textContent = "Your score was: " + userScore;
}