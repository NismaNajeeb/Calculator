let currentInput = "0";
let operator = "";
let memory = "0";
let isNewInput = true;

function refreshDisplay() {
  document.getElementById("result").value = currentInput;
}

function appendNumber(number) {
  if (isNewInput || currentInput === "0") {
    currentInput = number.toString();
    isNewInput = false;
  } else {
    currentInput += number.toString();
  }
  refreshDisplay();
}

function setOperator(op) {
  if (!isNewInput) {
    operator = op;
    memory = currentInput;
    isNewInput = true;
    refreshDisplay();
  }
}

function clearDisplay() {
  currentInput = "0";
  operator = "";
  memory = "0";
  isNewInput = true;
  refreshDisplay();
}

function calculate() {
  let result = 0;
  const num1 = parseFloat(memory);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = currentInput;
  }

  currentInput = result.toString();
  operator = "";
  memory = "0";
  isNewInput = true;
  refreshDisplay();
}
