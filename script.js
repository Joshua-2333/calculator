// Get references to the calculator elements
const screen = document.querySelector('#screen');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const clearButton = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operation = '';
let result = '';

// Function to update the display
function updateDisplay() {
  current.textContent = currentNumber;
  previous.textContent = previousNumber + ' ' + operation;
}

// Function to handle number button clicks
function handleNumberClick(event) {
  const number = event.target.textContent;
  currentNumber += number;
  updateDisplay();
}

// Function to handle operation button clicks
function handleOperationClick(event) {
  const op = event.target.textContent;
  if (currentNumber !== '') {
    if (previousNumber !== '') {
      calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
  }
}

// Function to handle equals button click
function handleEqualsClick() {
  if (currentNumber !== '') {
    calculate();
    previousNumber = '';
    operation = '';
    updateDisplay();
  }
}

// Function to calculate the result of an operation
function calculate() {
  if (operation === '+') {
    result = parseFloat(previousNumber) + parseFloat(currentNumber);
  } else if (operation === '-') {
    result = parseFloat(previousNumber) - parseFloat(currentNumber);
  } else if (operation === '*') {
    result = parseFloat(previousNumber) * parseFloat(currentNumber);
  } else if (operation === '/') {
    result = parseFloat(previousNumber) / parseFloat(currentNumber);
  }
  currentNumber = result.toString();
}

// Function to handle clear button click
function handleClearClick() {
  currentNumber = '';
  previousNumber = '';
  operation = '';
  result = '';
  updateDisplay();
}

// Function to handle decimal button click
function handleDecimalClick() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateDisplay();
  }
}

// Add event listeners to the buttons
numberButtons.forEach(button => button.addEventListener('click', handleNumberClick));
clearButton.addEventListener('click', handleClearClick);
decimalButton.addEventListener('click', handleDecimalClick);
operationButtons.forEach(button => button.addEventListener('click', handleOperationClick));
equalsButton.addEventListener('click', handleEqualsClick);