let hasMode = false;
let operation;
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

// First, choose operations
// Second, choose two numbers
// Third, press equals

let num1 = 0;
let num2 = 0;
let iteration = 0;

function handleClick(event) {

  const value = parseInt(event.target.innerHTML);

  console.log(`Clicked ${value}`);
  console.log(`num1 is ${num1}`);
  console.log(`${num1} + ${value} = ${num1 + value}`);
  console.log();

  if (hasMode == false) {

    num1 = num1 + value;


  }

}

////// UTILITY /////
function setOperation(event) {

  switch(event.target.innerHTML) {
    
    case "+":
      updateDisplay("Addition mode");
      hasMode = true;
    break;

    case "-":
      updateDisplay("Subtraction mode");
      hasMode = true;
    break;

    case "x":
      updateDisplay("Multiplication mode");
      hasMode = true;
    break;

    case "/":
      updateDisplay("Division mode");
      hasMode = true;
    break;
  }

}


function updateDisplay(value) {
  display.innerHTML = value;
}

