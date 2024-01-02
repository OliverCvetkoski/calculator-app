const displayText = document.querySelector(".text");
const theme = document.querySelector(".theme");
const img = document.querySelector(".img");
const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".numbers");
const controls = document.querySelectorAll(".controls");
const display = document.querySelector(".display");

let isDarkMode = false;

function addToDisplay(value) {
  displayText.value += value;
}

function clearDisplay() {
  displayText.value = "";
}

function deleteOneCharacter() {
  displayText.value = displayText.value.slice(0, -1);
}

function validateInput(event) {
  const inputElement = event.target;
  const inputValue = inputElement.value;
  const sanitizedValue = inputValue.replace(/[^0-9+\-*/.]/g, "");
  inputElement.value = sanitizedValue;
}

function summarize() {
  const result = eval(displayText.value);
  displayText.value = result;
}

function darkMode() {
  container.style.backgroundColor = "black";
  img.src = "assets/Moon.svg";
  theme.innerText = "Dark Mode";
  theme.style.color = "white";
  numbers.forEach((btn) => {
    btn.classList.remove("numbersLight");
  });
  controls.forEach((btn) => {
    btn.classList.remove("controlsLight");
  });
  display.classList.remove("displayLight");
  displayText.classList.remove("textLight");
}

function lightMode() {
  numbers.forEach((btn) => {
    btn.classList.add("numbersLight");
  });
  container.style.backgroundColor = "white";
  img.src = "assets/Sun.svg";
  theme.innerText = "Light Mode";
  theme.style.color = "black";
  controls.forEach((btn) => {
    btn.classList.add("controlsLight");
  });
  display.classList.add("displayLight");
  displayText.classList.add("textLight");
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    darkMode();
  } else {
    lightMode();
  }
}

toggleTheme();
