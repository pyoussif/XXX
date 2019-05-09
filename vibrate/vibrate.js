function startPattern() {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
  navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
}

function stopVibrations() {
    // You can also stop an ongoing vibration pattern by specifying a vibration
    // length of zero.
    navigator.vibrate(0);
}


"use strict"

var time = 0; var i = 0;
var isrunning = false;
var lap = "00:00:00:00";
var isready;


//to start or stop
function begin() {
    var aud = document.getElementById("click");

    //if clock is stop i.e when start 
    if (!isrunning) {
        isrunning = true;
        increment();
        aud.play(); isready = aud.play();
        document.getElementById("start").innerHTML = "PAUSE"; document.getElementById("begin").style.backgroundImage = "-webkit-linear-gradient(left,#cb2d3e,#ef473a)";
    }
    //when pause i.e while running     
    else {
        isrunning = false;

        if (isready !== undefined) {
            aud.pause();
        } document.getElementById("start").innerHTML = "RESUME"; document.getElementById("begin").style.backgroundImage = "-webkit-linear-gradient(right,#06beb6,#48b1bf)";
    }

}

//To increase time by 1 every 10 milliseconds
function increment() {
    if (isrunning) {
        setTimeout(

            function () {
                time++; var t = time / 10;

                //to set time
                var milli = time % 10;
                var secs = Math.floor(t % 60);
                var mins = Math.floor(t / 60);
                var hours = Math.floor(t / 3600);

                //minor changes
                if (mins < 10) { mins = "0" + mins; }
                if (milli < 10) { milli = milli + "0"; }
                if (hours < 10) { hours = "0" + hours; }
                if (secs < 10) { secs = "0" + secs; }

                //output  
                lap = hours + ":" + mins + ":" + secs + ":" + milli;

                document.getElementById("output").innerHTML = lap;

                increment();
            }, 100)

    }
}

//to set things to 00:00:00:00    
function reset() {
    isrunning = false; time = -1;
    console.log("----session ended-----");
    i = 0;

    var aud = document.getElementById("click");

    if (isready !== undefined) {
        aud.pause();
    }
    document.getElementById("start").innerHTML = "Start"; document.getElementById("output").innerHTML = "00:00:00:00"; document.getElementById("begin").style.backgroundImage = "-webkit-linear-gradient(right,#06beb6,#48b1bf)";

}

function noteLap() {
    i++;
    alert("Lap " + i + " on : " + lap);
}

