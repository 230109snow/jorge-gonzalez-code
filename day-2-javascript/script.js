console.log("am I here"); // sanity check

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
function displayValue(value) {
  const display = document.querySelector("#display");

  display.innerHTML = value;
}

function handleClick(event) {
  const value = event.target.innerHTML;

  displayValue(value);
}


