const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  remainingTime = DURATION;
  timeElement.innerText = DURATION;
  startCountdown();
  startButton.disabled = true;
});
closeToastElement.addEventListener("click", () => {
  closeToast();
});
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  intervalId = setInterval(() => {
    remainingTime--;
    //update the DOM to agree with the JS variable
    timeElement.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(intervalId);
      //call the show toast function when time equals 0
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    }
    console.log(remainingTime);
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}

function closeToast() {
  toastElement.classList.remove("show");
}
