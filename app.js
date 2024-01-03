const displayText = document.querySelector(".text");
const theme = document.querySelector(".theme");
const img = document.querySelector(".img");
const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".numbers");
const controls = document.querySelectorAll(".controls");
const display = document.querySelector(".display");

let isDarkMode = false;

function addToDisplay(value) {
  const maxLength = 18;

  const currentExpression = displayText.value;
  const lastCharIsOperator = /[-+*/.]$/.test(currentExpression);

  if (lastCharIsOperator && /[+\-*/.]/.test(value)) {
    return;
  }

  if (currentExpression.length >= maxLength) {
    return;
  }

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
  inputElement.value = inputElement.value.replace(/[^0-9+\-*/.]/g, "");
}

function summarize() {
  const expression = displayText.value;
  try {
    const result = math.evaluate(expression);
    displayText.value = result;
  } catch (error) {
    displayText.value = "Error";
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeMode = !isDarkMode ? "Moon" : "Sun";
  const themeText = !isDarkMode ? "Dark" : "Light";

  container.classList.toggle("containerLight", !isDarkMode);
  img.src = `assets/${themeMode}.svg`;
  theme.innerText = `Switch to ${themeText} Mode`;

  numbers.forEach((btn) => btn.classList.toggle("numbersLight", !isDarkMode));
  controls.forEach((btn) => btn.classList.toggle("controlsLight", !isDarkMode));
  display.classList.toggle("displayLight", !isDarkMode);
  displayText.classList.toggle("textLight", !isDarkMode);
}

toggleTheme();
