const displayText = document.querySelector(".text");

function addToDisplay(num) {
  displayText.value += num;
}

function addControls(control) {
  displayText.value += control;
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
  const result = eval(displayText.value); // Using eval to evaluate the mathematical expression
  displayText.value = result;
}
