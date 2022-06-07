// setInterval 
// setTimeout
// clearInterval

//buttons
const timerButton = document.getElementById('chronometerButton');
const hero = document.getElementById("main");

// chronometer
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById('minutes');

let minutesValue = 0;
let secondsValue = 0;
let currentChronometer;
let currentButton;

function startChronometer() {
  currentButton = event.target;
  currentButton.disabled = true;
  currentChronometer = setInterval(() => {
    secondsValue += 1;
    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue += 1;
      minutesSpan.textContent = formatValue(minutesValue);
    }
    secondsSpan.textContent = formatValue(secondsValue);
  }, 20)
}

function formatValue(value) {
  return ("0" + value).slice(-2);
}

function stopChronometer() {
  console.log("TIME STOP!");
  currentButton.disabled = false;
  clearInterval(currentChronometer);
}

function resetChronometer() {
  stopChronometer();
  secondsValue = 0;
  minutesValue = 0;
  minutesSpan.textContent = "00";
  secondsSpan.textContent = "00";
}

function startTimer() {
  event.preventDefault();
}

function executeAppFunction(button) {
  if (button == "Chronometer") {
    hero.innerHTML = `
      <h1 class="heroTitle">Chronometer</h1>
      <div class="heroTime">
        <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
      </div>
      <div class="heroButtons">
        <button onclick="startChronometer()" class="button heroButton" type="button">Start</button>
        <button onclick="stopChronometer()" class="button heroButton" type="button">Stop</button>
        <button onclick="resetChronometer()" class="button heroButton" type="button">Reset</button>
      </div>
    `
  } else if (button == "Timer") {
      hero.innerHTML = `
        <h1 class="heroTitle">${button}</h1>
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
  let secondsSpan = document.getElementById("seconds");
  let minutesSpan = document.getElementById('minutes');
  };
}