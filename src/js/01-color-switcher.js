const startbuttonRef = document.querySelector('[data-start]');
const stopbuttonRef = document.querySelector('[data-stop]');
const backgroundColorRef = document.querySelector('body');

startbuttonRef.addEventListener('click', onstartbuttonClick);
stopbuttonRef.addEventListener('click', onstopbuttonClick);
let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
 
function onstartbuttonClick(event) {
    event.target.disabled = true;
 intervalId = setInterval(() => {
    backgroundColorRef.style.backgroundColor = getRandomHexColor();     
    }, 1000);
};

function onstopbuttonClick(event) {
    startbuttonRef.disabled = false;
    clearInterval(intervalId);
   intervalId = backgroundColorRef.style.backgroundColor = "";
};



