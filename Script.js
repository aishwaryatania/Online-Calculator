var screen = document.getElementById('screen');
var expression = '';

function appendNumber(number) {
  expression += number;
  updateScreen();
}

function appendOperator(operator) {
  expression += operator;
  updateScreen();
}

function clearScreen() {
  expression = '';
  updateScreen();
}

function calculate() {
  try {
    var result = eval(expression);
    if (!Number.isFinite(result)) {
      throw new Error('Invalid result');
    }
    expression = result.toString();
    updateScreen();
  } catch (error) {
    expression = '';
    updateScreen();
    console.log('Error: ' + error);
    alert('Invalid input. Please enter a valid calculation.');
  }
}

function updateScreen() {
  screen.textContent = expression;
}
