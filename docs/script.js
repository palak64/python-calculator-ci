let expression = '';

function press(char) {
  expression += char;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = '' + result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}
