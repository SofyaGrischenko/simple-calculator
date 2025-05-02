import '../styles/index.scss';

const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operators = ['c', '+', '–', '/', 'x', '%', '+/-', '='];

let operatorsFlag = false;
let currentOperator = ' ';
let firstOperand = 0;
let secondOperand = 0;
let answerFlag = false;

export function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const numsContainer = document.createElement('div');
  numsContainer.classList.add('numpad');
  for (let key of keys) {
    const button = createButton(key);
    button.addEventListener('click', handleNumsClick(key));
    numsContainer.appendChild(button);
  }

  const operatorsContainer = document.createElement('div');
  operatorsContainer.classList.add('operators');
  for (let key of operators) {
    const button = createButton(key);
    button.addEventListener('click', handleOperatorClick(key));
    operatorsContainer.appendChild(button);
  }

  keyboard.append(operatorsContainer, numsContainer);
  return keyboard;
}

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('button');
  return button;
}

function handleNumsClick(key) {
  return () => {
    const input = document.querySelector('.input');
    if (input.value === '0' || input.value === 'Error') {
      input.value = key;
    } else {
      input.value += key;
    }
  };
}

function handleOperatorClick(key) {
  return () => {
    const input = document.querySelector('.input');

    if (key === 'c') {
      if (answerFlag || input.value.length === 1) {
        input.value = '0';
        currentOperator = '';
        operatorsFlag = false;
        answerFlag = false;
      } else {
        input.value = input.value.slice(0, -1);
        if (!input.value.includes(currentOperator)) {
          operatorsFlag = false;
          currentOperator = '';
        }
      }
      return;
    }

    if (key === '+/-') {
      input.value = String(parseFloat(input.value) * -1);
      return;
    }

    if (key === '=' && operatorsFlag && currentOperator !== ' ') {
      const [first, second] = input.value.split(currentOperator);
      if (!second || isNaN(parseFloat(second))) {
        return;
      }
      firstOperand = parseFloat(first);
      secondOperand = parseFloat(second);

      let answer;
      switch (currentOperator) {
        case '+':
          answer = firstOperand + secondOperand;
          break;
        case '–':
          answer = firstOperand - secondOperand;
          break;
        case '/':
          answer = firstOperand / secondOperand;
          break;
        case 'x':
          answer = firstOperand * secondOperand;
          break;
        case '%':
          answer = firstOperand * (secondOperand / 100);
          break;
      }

      input.value = answer.toString();
      operatorsFlag = false;
      currentOperator = ' ';
      firstOperand = 0;
      secondOperand = 0;
      answerFlag = true;
      return;
    }

    if (!operatorsFlag && key !== '=' && key !== 'c') {
      currentOperator = key;
      input.value += key;
      operatorsFlag = true;
    }
  };
}
