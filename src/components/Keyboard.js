import '../styles/index.scss';

export function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  const operators = ['+', '–', '/', 'x', '%', '+/-', '='];

  const numsContainer = document.createElement('div');
  numsContainer.classList.add('numpad');
  for (let key of keys) {
    numsContainer.appendChild(buttons(key));
  }

  const operatorsContainer = document.createElement('div');
  operatorsContainer.classList.add('operators');
  for (let key of operators) {
    operatorsContainer.appendChild(buttons(key));
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
