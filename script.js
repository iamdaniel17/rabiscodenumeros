function appendValue(value) {
  const display = document.getElementById('calc-display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('calc-display').value = '';
}

function deleteLast() {
  const display = document.getElementById('calc-display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('calc-display');
  try {
    display.value = eval(display.value); // Nota: Use com cautela em projetos maiores
  } catch (error) {
    display.value = 'Erro';
  }
}
