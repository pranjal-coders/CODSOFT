let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operation = button.value;
        previousInput = currentInput;
        currentInput = '';
    });
});

equalsButton.addEventListener('click', () => {
    if (operation && previousInput) {
        currentInput = calculate(previousInput, currentInput, operation);
        operation = null;
        previousInput = '';
        updateDisplay();
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
});

function updateDisplay() {
    display.textContent = currentInput;
}

function calculate(first, second, operation) {
    first = parseFloat(first);
    second = parseFloat(second);
    switch (operation) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return first / second;
        default: return 0;
    }
}