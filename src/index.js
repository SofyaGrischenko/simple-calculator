import './styles/index.scss';

function main() {
  const container = document.createElement('div');
  container.classList.add('main');

  const input = document.createElement('input');
  input.classList.add('input');
  input.placeholder = '0';
  container.appendChild(input);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  buttonsContainer.appendChild(operators());
  buttonsContainer.appendChild(numPad());
  container.appendChild(buttonsContainer);
  document.body.appendChild(container);
}

function buttons(text) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = text;
  button.addEventListener('click', () => {
    console.log('click');
  });
  return button;
}

function numPad() {
  const container = document.createElement('div');
  container.classList.add('nampad');
  for (let i = 0; i < 10; i++) {
    container.appendChild(buttons(i));
  }

  return container;
}

function operators() {
  const container = document.createElement('div');
  container.classList.add('operators');

  container.appendChild(buttons('+'));
  container.appendChild(buttons('–'));
  container.appendChild(buttons('/'));
  container.appendChild(buttons('x'));
  container.appendChild(buttons('%'));
  container.appendChild(buttons('='));
  container.appendChild(buttons('+/-'));

  return container;
}

main();
