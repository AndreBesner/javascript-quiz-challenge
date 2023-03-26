var overAllTime = 60 ; // this is the main value for the one minute quiz


var startButton = document.querySelector('#start-button');


    



startButton.addEventListener('click', function(){
    // this actually hides that start buttun                                                          !!!! REMEMBER TO UNDHIDE LATER !!!
    startButton.setAttribute('hidden', true);
    // this is the function to subtract one second from quiz and write it to top of page
    var timer = setInterval(() => {
        overAllTime -- ;
        document.querySelector('.time-left').innerHTML = overAllTime ;
    }, 1000);
});