// setInterval 
// setTimeout
// clearInterval

//buttons
const timerButton = document.getElementById('timerButton');
const hero = document.getElementById("main");

//Chronometer Functions & variables
var currentChronometer;
var currentButton;
var chronometerMinutesValue = 0;
var chronometerSecondsValue = 0;
var chronometerSecondsSpan = document.getElementById("chronometerSeconds");
var chronometerMinutesSpan = document.getElementById('chronometerMinutes');

console.log(chronometerSecondsSpan)
console.log(chronometerMinutesSpan)
function formatValue(value) {
  return ("0" + value).slice(-2);
}

function startChronometer() {
  currentButton = event.target;
  currentButton.disabled = true;
  currentChronometer = setInterval(() => {
    chronometerSecondsValue += 1;
    if (chronometerSecondsValue === 60) {
      chronometerSecondsValue = 0;
      chronometerMinutesValue += 1;
      chronometerMinutesSpan.textContent = formatValue(chronometerMinutesValue);
    }
    chronometerSecondsSpan.textContent = formatValue(chronometerSecondsValue);
  }, 20)
}


function stopChronometer() {
  console.log("TIME STOP!");
  currentButton.disabled = false;
  clearInterval(currentChronometer);
}

function resetChronometer() {
  stopChronometer();
  chronometerSecondsValue = 0;
  chronometerMinutesValue = 0;
  chronometerMinutesSpan.textContent = "00";
  chronometerSecondsSpan.textContent = "00";
}

var chronometerSecondsSpan = document.getElementById("chronometerSeconds");
var chronometerMinutesSpan = document.getElementById('chronometerMinutes');

function chronometerSection () {
  hero.innerHTML = `
      <h1 class="heroTitle">Chronometer</h1>
      <div class="heroTime">
        <p id="time"><span id="chronometerMinutes">00</span>:<span id="chronometerSeconds">00</span></p>
      </div>
      <div class="heroButtons">
        <button onclick="startChronometer()" class="button heroButton" type="button">Start</button>
        <button onclick="stopChronometer()" class="button heroButton" type="button">Stop</button>
        <button onclick="resetChronometer()" class="button heroButton" type="button">Reset</button>
      </div>
    `;

}

//timer
function startTimer() {
  event.preventDefault();
}

function timerSection () {
  hero.innerHTML = `
        <h1 class="heroTitle">${section}</h1>
        <div class="heroTime">
          <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
        </div>
        <div class="heroButtons">
          <form onSubmit="startTimer()">
            <input type="number" placeholder="Write the minutes" id="minutesInput" min="0"/>
            <input type="number" placeholder="Write the seconds" id="secondsInput" min="0"/>
            <button type="submit" >Start</button>
          </form>
        </div>
      `
}