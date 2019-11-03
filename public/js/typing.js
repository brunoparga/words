const input = document.querySelector('input');

window.addEventListener('keyup', (event) => {
  const inputNotFocused = document.activeElement !== input;
  const keyIsLetter = event.key.length === 1
    && event.key.toUpperCase() !== event.key.toLowerCase();
  if (inputNotFocused && keyIsLetter) {
    input.value = event.key;
    input.focus();
  }
});
