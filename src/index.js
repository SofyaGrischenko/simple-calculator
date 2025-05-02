import './styles/index.scss';
import { createInput } from './components/Input';
import { createKeyboard } from './components/Keyboard';
import { createThemeBtn } from './components/ThemeBtn';

function main() {
  const container = document.createElement('div');
  container.classList.add('main');
  container.appendChild(createInput());
  container.appendChild(createKeyboard());
  container.appendChild(createThemeBtn());

  document.body.appendChild(container);
}

main();
