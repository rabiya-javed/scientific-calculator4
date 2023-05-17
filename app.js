let expression = '';

function append(value) {
  expression += value;
  document.getElementById('result').innerText = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').innerText = '0';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('result').innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').innerText = result;
    expression = result;
  } catch (error) {
    document.getElementById('result').innerText = 'Error';
    expression = '';
  }
}

