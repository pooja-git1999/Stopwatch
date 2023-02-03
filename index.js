let hr = 0;
let min = 0;
let sec = 0;

//timer is false means timer is stop currently
let timer = false;

// Function for start watch
function startButton() {
    if (timer == false) {
        timer = true;
        stopwatch();
    };
}

// Function for stop watch
function stopButton() {
    timer = false;
}

// Function for restart watch
function restartButton() {

}

//main function that work
function stopwatch() {
    if (timer == true) {


        
        setTimeout('stopwatch()', 1000);
    }
}
