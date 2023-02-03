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
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";

}

//main function that work
function stopwatch() {
    if (timer == true) {
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;


        if (sec < 10) {
            secString = "0" + secString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (hr < 10) {
            hrString = "0" + hrString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout('stopwatch()', 1000);
    }
}
