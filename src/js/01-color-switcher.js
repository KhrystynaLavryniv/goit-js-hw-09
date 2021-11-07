
const startBtnRef = document.querySelector('[data-start]')
const stopBtnRef = document.querySelector('[data-stop]')
const bodyRef = document.querySelector('body')
let timerId = null

startBtnRef.addEventListener('click', onChangeBodyColor)

stopBtnRef.addEventListener('click', onStop)

function onChangeBodyColor() {
    timerId = setInterval(() => {
    createBodyColor()
    }, 1000);
    startBtnRef.setAttribute("disabled", true)
}

function createBodyColor() {
    const bodyColor = getRandomHexColor();
    bodyRef.style.backgroundColor = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStop() {
    clearInterval(timerId);
    startBtnRef.removeAttribute("disabled");
}