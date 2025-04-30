import '../styles/index.scss';

export function createInput() {
  const input = document.createElement('input');
  input.placeholder = '0';
  input.classList.add('input');

  input.addEventListener('keydown', (e) => {
    const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if ((e.key >= '0' && e.key <= '9') || allowed.includes(e.key)) return;
    e.preventDefault();
  });

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
  });

  return input;
}
