# Pseudo code

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score


## Initial Thoughts

time interval sets how long between function executions

you can use this to have a countdown timer going, start from say 100s


## Walkthru

variables?

userScore
startTime
timeLeft
saveScore


functions?

***startGame() 
***submitQuestions()
nextQuestions()
rightQuestion()?
wrongQuestins()?
saveScore()
clearScore()


click start button begins countdown timer
start button html buttom class 
even listener to start the timer function
also trigger first question function?
this button goes away when game starts?

countdown timer displayed top right of page
set internal with 1000ms 
time--;
start at 60sec write that to top right of page


when countdown timer = 0

game over function?

function for each aspect of game?

Event listener on buttons

function for each question? this function could have enclosed buttons where the order is preset and if they choose right button score++
if not right button time -10
have buttons display as list? 

at end therefore no time or done questions, have function to save score to local storage as string array? you cant store objects local so you need to convert
maybe add fun plus score with positive time left 

also have another button with event listener to run clear score 


page load

simple page, no fancy css requirements

presented with 

