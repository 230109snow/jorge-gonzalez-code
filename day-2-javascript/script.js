let hasMode = false;
let operation;
let num = 0;
const display = document.querySelector("#display");

////// OPERATIONS /////
function add(num1, num2) {
  console.log(num1 + num2);
}
function subtract(num1, num2) {
  console.log(num1 - num2);
}
function multiply(num1, num2) {
  console.log(num1 * num2);
}
function divide(dividend, divisor) {
  console.log(dividend / divisor);
}

////// UTILITY /////
function setOperation(event) {

  switch(event.target.innerHTML) {
    
    case "+":
      updateDisplay("Addition mode");
      operation = "+";
      hasMode = true;
    break;

    case "-":
      updateDisplay("Subtraction mode");
      operation = "-"
      hasMode = true;
    break;

    case "x":
      updateDisplay("Multiplication mode");
      operation = "x";
      hasMode = true;
    break;

    case "/":
      updateDisplay("Division mode");
      operation = "/"
      hasMode = true;
    break;
  }

}
function handleClick(event) {

  if (hasMode == false) {
    alert("Please choose an operation to perform first.");
  } else {
    const value = parseInt(event.target.innerHTML);
    switch(operation) {

      case "+":
        num = num + value;
        updateDisplay(num);
      break;

      case "-":
        num = num - value;
        updateDisplay(num);
      break;

      case "x":
        num = num * value;
        updateDisplay(num);
      break;

      case "/":
        num = num / value;
        updateDisplay(num);
      break;
    }
  }

}
function updateDisplay(value) {
  display.innerHTML = value;
}

function clearValue() {
  num = 0;
  updateDisplay(num);
}
