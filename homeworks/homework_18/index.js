/*
Задание
Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд. 
При достижении 0 секунд таймер должен остановиться.
Стилизуйте ег
*/

let timerContent = document.querySelector("#timer-content");
let startTimerButton = document.querySelector("#start-timer");
let stopTimerButton = document.querySelector("#stop-timer");
let resetTimerButton = document.querySelector("#reset-timer");

let checkTimer = false;
let timerId;
let second = 60;
timerContent.textContent = second;

const updateTime = () => {
  timerContent.textContent = second;
  second--;

  if (second < 0) {
    startTimerButton.removeAttribute("disabled");
    clearInterval(timerId);
  }
};

const startTimer = () => {
  if (!checkTimer) {
    startTimerButton.setAttribute("disabled", "");
    checkTimer = true;
    updateTime();
    timerId = setInterval(updateTime, 1000);
  }
};

const stopTimer = () => {
  checkTimer = false;
  clearInterval(timerId);
  startTimerButton.removeAttribute("disabled");
};

const resetTimer = ()=>{
  second = 60;
  timerContent.textContent = second;
}

startTimerButton.addEventListener("click", startTimer);
stopTimerButton.addEventListener("click", stopTimer);
resetTimerButton.addEventListener("click",resetTimer)
