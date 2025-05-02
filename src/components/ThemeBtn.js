import '../styles/index.scss';

export function createThemeBtn() {
  const button = document.createElement('button');
  button.classList.add('theme-button');
  button.textContent = '☀️';

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    button.textContent === '☀️'
      ? (button.textContent = '🌙')
      : (button.textContent = '☀️');
  });
  return button;
}
