
// /* this is the array for the question objects. Each question object has a questions, answers, and final answer.*/
// var questionArray = [
//     // arrays question
//     {
//         question : "How do you store multiple variables with JavaScript?",
//         answers : ["Ashtrays", "Arrays", "Astrays", "Afraids"],
//         answer : "Arrays"
//     },
//     // objects quesion
//     {
//         question : "How do you describe a thing with multiple characteristics, like these questions?",
//         answers : ["Orfects", "Ejects", "Elects", "Objects"],
//         answer : "Objects"
//     },
//     // variables question
//     {
//         question : "What do you use to store singular pieces of information, like a number or name?",
//         answers : ["Lets", "Doofensmurtz", "Variables", "Terribles"],
//         answer : "Variables"
//     },

// ]
   

// /* This is the function to initialize the overall time for test (60 seconds)
// a global variable is declared to run timer off of, so we can cancel that timer with a later function*/
// var myTimer; //global scope to be clearInterval() later
// function timeDown(){
//     myTimer = setInterval(()=>{
//         overAllTime--;
//         document.querySelector('.time-left').innerHTML = overAllTime ; // prints time left to page
//         }   , 1000)
// }

// //  this function waits for a click event on start button then begins countdown timer and prints that to page
// //  LOGIC TO BE ADDED
// startButton.addEventListener('click', testStart);

// function testStart(){
//     quizBoxStart.setAttribute('hidden', true); // hides start page
//     quizBoxQuestions.style.display = 'block' ; // reveals quiz questions
//     timeDown(); // calls time down function to begin running and quiz has started
//     printQuestion();
// }



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
    }, 1000)
}

var quizBoxStartPage = document.querySelector("#quiz-box-start-page");
var quizBoxQuestionsPage = document.querySelector("#quiz-box-questions-page");
function showQuestions(){
    quizBoxStartPage.style.display = "none";
    quizBoxQuestionsPage.style.display = "block";
}