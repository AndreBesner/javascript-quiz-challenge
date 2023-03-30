/* this is the array for the question objects. Each question object has a question, answers, and final answer element. The final answer is 
merely the index for the proper reply in the "answers" array element */
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

// This function actually starts the quiz when the user clicks start button
var startButton = document.querySelector("#start-button");
startButton.addEventListener('click', startGame);
function startGame(){
    timeDecrease();
    showQuestions();
}

// This function sets the main time for quiz (1 minute) and makes it globally accessable for when we gotta slash time
// Decreases one unit every second
// Called by startGame() 
var userTimeRemaining = 60 ;
function timeDecrease(){
    timer = setInterval(()=>{ //arrow functions are tough to learn but a cool concept
        userTimeRemaining -= 1 ;
        document.querySelector("#time-left").innerHTML = userTimeRemaining ;
        console.log(userTimeRemaining);
        if(userTimeRemaining <= 0 || currentQuestionIndex == 4){
            clearInterval(timer);
            endGame();
        }
    }, 1000)
}

// This function is called with the previous startGame()
// This checks we havent reached the last questions, if so will exit
// It then prints the question from the questionArray
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

// This function is called by showQuestions()
// It makes clickable buttons for each answer, once a button is clicked
// It will determine whether it was right or wrong using the inner button text compared
// to the text of the known index of the correct answer.
// This code was built on the foundation provided by Adam Nyx, a bootcamp instructor.
function showResponses(){
    var responses = questionArray[currentQuestionIndex].answers;
    for(var i = 0 ; i < responses.length ; i++){
        var response = responses[i];
        var makeButton = document.createElement("button");
        makeButton.textContent = response;
        makeButton.addEventListener("click", function(e){
            checkAnswer(e.target.innerText);
        });
        displayAnswers.appendChild(makeButton);
    }
}

// This logic determines whether to add to user score, or to subtract from the time remaining
// This is called whenever the user selects an answer button
// It pulls the innertext from the button in prev function and hands it to this one. Using the known true answer index we can compare the
// button text to the array text at the correct index.
var userScore = 0;
function checkAnswer(userSelected){
    var correctAnswerIndex = questionArray[currentQuestionIndex].answer
    var correctAnswer = questionArray[currentQuestionIndex].answers[correctAnswerIndex];
    if(userSelected == correctAnswer){
        userScore++;
    }
    else{
        userTimeRemaining -= 5 ;
    }
    displayQuestion.innerHTML = ""; // this clears the prior values
    displayAnswers.innerHTML = "";
    currentQuestionIndex++;
    showQuestions();
}

// This function runs when the user time is out, or they have completed all questions
// It merely displays their score to the page and asks for the input of initials
var quizBoxEndPage = document.querySelector("#quiz-box-end");
var displayUserScore = document.querySelector("#display-user-score")
function endGame(){
    console.log("Your score was: " + userScore);
    quizBoxQuestionsPage.style.display = "none";
    quizBoxEndPage.style.display = "block";
    displayUserScore.textContent = "Your score was: " + userScore;
}

// The user initials are read from the form
// The input from the from is spliced with the known user score
// There is a variable established for the local storage called localInitials
// A check is initially run to see if it exists, and if so to get it ready, if there is no localInitials found it creates
// a new array
// 
var userInput = document.querySelector("#user-initials");
userInput.addEventListener("submit", (e)=>{
    e.preventDefault();                                                    
    var userInitialsRaw = document.querySelector("#initials").value;
    var userInitials = userInitialsRaw + ", whose score was: " + userScore
    var localInitials = JSON.parse(localStorage.getItem("localInitials")) || [] ;
    localInitials.push(userInitials);
    localStorage.setItem("localInitials", JSON.stringify(localInitials));
    showHighScores(localInitials);
})

// This function prints all the user entered highscores to the final page of the website
// It parses the local storage for existing saved names, then creates list items in existing unordered list element,
// and attaches the initials and score to each list item as a new line.
var showScoresPage = document.querySelector("#show-scores-page");
var highScoreList = document.querySelector("#highscore-list");
var savedNames = JSON.parse(localStorage.getItem("localInitials"));
function showHighScores(savedNames){
    quizBoxEndPage.style.display = "none";
    showScoresPage.style.display = "block";
    for(var i = 0 ; i < savedNames.length ; i++){
        var itemToList = savedNames[i];
        var makeList = document.createElement('li');
        makeList.innerHTML = itemToList;
        highScoreList.appendChild(makeList);
    }
}