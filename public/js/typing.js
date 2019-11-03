const input = document.querySelector('input');

window.addEventListener('keyup', (event) => {
  if (document.activeElement !== input) {
    console.log(event);
    input.value = event.key;
    input.focus();
  }
});
