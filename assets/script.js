var userScore;

var questionIndex;




var overAllTime = 60 ; // this is the main value for the one minute quiz

// Variable for end game view score button
var endGameViewScore = document.querySelector('.end-game');

// variable for initial div on webpage
var quizBoxStart = document.querySelector('.quiz-box-start');

// variable for questions div that is hidden by default, appear when start button clicked, disappear at test end
var quizBoxQuestions = document.querySelector('.quiz-box-questions');

// variable for final page div,  hidden by dault, appear at test end, of when end button clicked
var quizBoxEnd = document.querySelector('.quiz-box-end');

// variable for start button to initialize the test
var startButton = document.querySelector('#start-button'); // this makes a variable for start button element

//variable for start over button on quiz end div
// var startAgain = document.querySelector('#start-again');
   

/* This is the function to initialize the overall time for test (60 seconds)
a global variable is declared to run timer off of, so we can cancel that timer with a later function*/
var myTimer; //global scope to be clearInterval() later
function timeDown(){
    myTimer = setInterval(()=>{
        overAllTime--;
        document.querySelector('.time-left').innerHTML = overAllTime ; // prints time left to page
        }   , 1000)
}










//  this function waits for a click event on start button then begins countdown timer and prints that to page
//  LOGIC TO BE ADDED
startButton.addEventListener('click', testStart);

function testStart(){
        quizBoxStart.setAttribute('hidden', true); // hides start page
        quizBoxQuestions.style.display = 'block' ; // reveals quiz questions
        timeDown(); // calls time down function to begin running and quiz has started
}

// this function runs when user clicks end game view scores button
// used an arrow function here for practice and it doesn't really needs it's own name 
endGameViewScore.addEventListener('click', ()=>{
    testEnd(); //calls following test end function
    clearInterval(myTimer); // stops timer with clearInterval()
});

function testEnd(){
    quizBoxStart.setAttribute('hidden', true);
    quizBoxQuestions.style.display = 'none' ;
    quizBoxEnd.style.display = 'block';
    clearInterval(myTimer);
}

// startAgain.addEventListener('click', startOver);
// function startOver(){
//     quizBoxEnd.setAttribute('hidden', true);
//     testStart();
// }








/* this is the array for the question objects. Each question object has a questions, answers, and final answer.*/

var questionArray = [
    // arrays question
    {
        question : "How do you store multiple variables with JavaScript?",
        answers : ["Ashtrays", "Arrays", "Astrays", "Afraids"],
        answer : "Arrays"
    },
    // objects quesion
    {
        question : "How do you describe a thing with multiple characteristics, like these questions?",
        answers : ["Orfects", "Ejects", "Elects", "Objects"],
        answer : "Objects"
    },
    {
        question : "What do you use to store singular pieces of information, like a number or name?",
        answers : ["Lets", "Doofensmurtz", "Variables", "Terribles"],
        answer : "Variables"
    },

]
