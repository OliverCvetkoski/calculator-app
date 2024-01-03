const displayText = document.querySelector(".text");
const theme = document.querySelector(".theme");
const img = document.querySelector(".img");
const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".numbers");
const controls = document.querySelectorAll(".controls");
const display = document.querySelector(".display");

let isDarkMode = true;

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

/* function summarize() {
  const expression = displayText.value;

  // Extract the numeric part before the percentage
  const numericPart = expression.match(/^\d+/);
  const baseValue = numericPart ? parseFloat(numericPart[0]) : 0;

  // Extract the percentage part
  const percentagePart = expression.match(/(\d+)%/);
  const percentageValue = percentagePart
    ? parseFloat(percentagePart[1]) / 100
    : 0;

  // Calculate the result (subtract percentage from the base value)
  const result = baseValue - baseValue * percentageValue;

  // Set the result in the display
  displayText.value = result;
} */

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeMode = isDarkMode ? "Moon" : "Sun";
  const themeText = isDarkMode ? "Dark" : "Light";

  container.classList.toggle("containerLight", isDarkMode);
  img.src = `assets/${themeMode}.svg`;
  theme.innerText = `Change to ${themeText} Mode`;

  numbers.forEach((btn) => btn.classList.toggle("numbersLight", isDarkMode));
  controls.forEach((btn) => btn.classList.toggle("controlsLight", isDarkMode));
  display.classList.toggle("displayLight", isDarkMode);
  displayText.classList.toggle("textLight", isDarkMode);
}

toggleTheme();
