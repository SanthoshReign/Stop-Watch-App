var start = document.getElementById('start'); // fetching start button
var stopage = document.getElementById('stop'); //fetching stop button
var reset = document.getElementById('reset'); //fetching reset button
var displayTime = document.getElementById('timing'); //fetching display Screen

var elapseTime = 0;
var stopInterval = false;
var startTime;

start.addEventListener('click',startTimer); //click event on start button
stopage.addEventListener('click',stopTimer); //click event on stop button
reset.addEventListener('click',resetTimer); //click event on reset button

function startTimer(){
    if( !stopInterval){
        startTime = new Date().getTime() - elapseTime; 
        //Date().getTime() return No. of milliseconds since 1st January 1970 midnight
        //startTime will calculate total run time in milliseconds reduced since start button is clicked
        stopInterval = setInterval(updateTimer, 1000); 
        //setInterval is a function which will
        //repeatedly do some actions with certain time interval and it returns an instance id
        //while running
    }
}
function stopTimer(){
    clearInterval(stopInterval);
    //clearInterval is a function which stops the setInterval function when an event is occured
    elapseTime = new Date().getTime() - startTime;
    //elapseTime---total milliseconds from 0 millisecond to time when stop button is clicked
    stopInterval = null;
}
function resetTimer(){
    //resetting timer again to 00:00:00
    stopTimer();
    elapseTime = 0;
    timing.innerHTML = "00:00:00";
}

//from number 0 to 9, add '0' in front of it, in order to make it a double digit number
function Timer(num){
    if(num < 10){
        return "0" + num;
    }else{
        return "" + num;
    }
}

function updateTimer(){
    var millisec = new Date().getTime(); //Date().getTime() return No. of milliseconds 
    //since 1st January 1970 midnight
    var elapseTime = millisec - startTime;  //starts for 0 millisecond
    
    //1second = 1000 milliseconds  
    var secs = Math.floor(elapseTime / 1000) % 60; //Math.floor function returns the closest
    // integer value in case of decimal

    var mins = Math.floor(elapseTime / 1000 / 60) % 60;
    var hrs = Math.floor(elapseTime / 1000 / 60 /60);

    var display = Timer(hrs)+':'+Timer(mins)+':'+Timer(secs);
    displayTime.innerHTML = display;
    //display time repeatedly until the stop button is clicked
}

