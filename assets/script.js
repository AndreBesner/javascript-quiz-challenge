
var timeCountdown = 60 ;
var timeLeft = document.querySelector("#time-left");

var startButton = document.querySelector("#start-button");



startGame(){
    timeLeft.textContent = timeCountdown;
}

startButton.addEventListener("click", startGame);