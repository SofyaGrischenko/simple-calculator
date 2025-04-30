import './styles/index.scss';
import { createInput } from './components/Input';
import { createKeyboard } from './components/Keyboard';

function main() {
  const container = document.createElement('div');
  container.classList.add('main');

  container.appendChild(createInput());
  container.appendChild(createKeyboard());

  document.body.appendChild(container);
}

main();
