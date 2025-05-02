import '../styles/index.scss';

export function createInput() {
  const input = document.createElement('input');
  input.value = 0;
  input.classList.add('input');
  input.readOnly = true;

  return input;
}
