/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
'use strict';

const decrease = document.querySelector("#decrease");
const sessionLength = document.querySelector(".session-length");
const increase = document.querySelector("#increase");
const sessionTime = document.querySelector(".session-time");
const sessionMinute = document.querySelector("#session-minute");
const sessionSecond = document.querySelector("#session-second");
const playButton = document.querySelector("#play-button");
const stopButton = document.querySelector("#stop-button");
// Keeping the time info for showing on the screen second by second
const time = {
  min: 25,
  sec: 60
};
// Keeping the set time info for resetting
const timeForReset = {
  min: 25,
  sec: 60
};

// Decrease and increase the session length
function decreaseMinute(){
  time.min--;
  timeForReset.min--;
  sessionLength.innerHTML = time.min;
  sessionMinute.innerHTML = time.min;
};

function increaseMinute(){
  time.min++;
  timeForReset.min++;
  sessionLength.innerHTML = `${time.min}`;
  sessionMinute.innerHTML = `${time.min}`;
};

// For starting countdown timer
function startCountdown(){
  playButton.innerHTML = 
  `<a href="#" id="reset-button" ><i class="fas fa-stop"></i></a>`;
  time.min -= 1;
  time.sec -= 1;
  sessionMinute.innerHTML = time.min;
  sessionSecond.innerHTML = time.sec;
  countdownWithInterval();
};

// Setting interval for countdown function and 
// adding eventlisteners for stop - reset buttons 
function countdownWithInterval(){
  let interval = setInterval(countdown, 1000);
  // Setting stop button for two different action
  let countOfStopClick = 0;
  stopButton.addEventListener('click', () => {
    countOfStopClick++;
    countOfStopClick % 2 === 1 ? clearInterval(interval) : 
    interval = setInterval(countdown, 1000);
  });
  playButton.addEventListener('click', () => {
    clearInterval(interval);
  });
};

// Execution of countdown
function countdown(){
  time.sec--;
  // If the seconds contain only 1 number, adding a '0' before the number
  time.sec < 10 ? sessionSecond.innerHTML = '0' + time.sec : 
  sessionSecond.innerHTML = time.sec;
  // Setting minutes according to seconds
  if(time.sec < 0){
    time.min--;
    sessionMinute.innerHTML = time.min;
    time.sec = 59;
    sessionSecond.innerHTML = time.sec;
  };
  // When the time is over, removing the time board and showing a message
  if(time.min === 0 && time.sec === 0){
    clearInterval(interval);
    // Removing 3 'p' tag of parent element 'seesionTime'  
    while(sessionTime.hasChildNodes()){
      sessionTime.removeChild(sessionTime.firstChild);
    };
    const message = document.createElement('p');
    message.innerHTML = "Time's up!";
    message.style.fontSize = "3rem";
    sessionTime.appendChild(message);
  };
};

// Setting play button for two different action: Starting - Resetting
let countOfPlayClick = 0;
function setPlayButtonClick(){
  countOfPlayClick++;
  if (countOfPlayClick % 2 === 1){
    // To start
    decrease.removeEventListener('click', decreaseMinute);
    increase.removeEventListener('click', increaseMinute);
    startCountdown();
  }else{
    // To reset
    decrease.addEventListener('click', decreaseMinute);
    increase.addEventListener('click', increaseMinute);
    time.min = timeForReset.min;
    time.sec = timeForReset.sec;
    sessionMinute.innerHTML = time.min;
    sessionSecond.innerHTML = "00";
    playButton.innerHTML = `<a href="#" id="play-button" ><i class="fas fa-play"></i></a>`;
  };
};

decrease.addEventListener('click', decreaseMinute);
increase.addEventListener('click', increaseMinute);
playButton.addEventListener('click', setPlayButtonClick);