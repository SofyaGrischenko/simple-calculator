import '../styles/index.scss';

const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const operators = ['c', '+', '–', '/', 'x', '%', '+/-', '='];
let operatorsFlag = false;
let currentOperator = '';
let firstOperand = 0;
let secondOperand = 0;

export function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const numsContainer = document.createElement('div');
  numsContainer.classList.add('numpad');
  for (let key of keys) {
    const button = buttons(key);
    button.addEventListener('click', handleNums(key));

    numsContainer.appendChild(button);
  }

  const operatorsContainer = document.createElement('div');
  operatorsContainer.classList.add('operators');
  for (let key of operators) {
    const button = buttons(key);
    button.addEventListener('click', handleOperator(key));

    operatorsContainer.appendChild(button);
  }

  keyboard.append(operatorsContainer, numsContainer);
  return keyboard;
}

function buttons(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('button');

  return button;
}

function handleNums(key) {
  return () => {
    const input = document.querySelector('.input');
    input.value += key;
  };
}

function handleOperator(key) {
  return () => {
    const input = document.querySelector('.input');

    if (key === 'c') {
      input.value = input.value.slice(0, -1);
      return;
    }

    if (!operatorsFlag) {
      currentOperator = key;
      firstOperand = parseInt(input.value);
      input.value = '';
      operatorsFlag = true;
    }

    if (key === '=') {
      input.value
        ? (secondOperand = parseInt(input.value))
        : (secondOperand = 0);

      switch (currentOperator) {
        case '+':
          input.value = firstOperand + secondOperand;
          break;
        case '–':
          input.value = firstOperand - secondOperand;
          break;
        case '/':
          input.value = firstOperand / secondOperand;
          break;
        case 'x':
          input.value = firstOperand * secondOperand;
          break;
        case '%':
          input.value = (firstOperand / 100) * secondOperand;
          break;
        case '+/-':
          input.value = -firstOperand;
          break;
      }
      operatorsFlag = false;
      currentOperator = '';
      firstOperand = 0;
    }
  };
}
