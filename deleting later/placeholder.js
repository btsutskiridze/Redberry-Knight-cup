const inputs = document.querySelectorAll('.input');
// Name.addEventListener('keypress');
// console.log(Name.value.length);

inputs[3].addEventListener('focus', (e) => {
  if (inputs[3].value.length > 0) {
    inputs[3].previousElementSibling.classList.add('hide-label');
    sessionStorage.setItem('placeholder3', 'hide-label');
  }
});
inputs[2].addEventListener('keydown', (e) => {
  if (inputs[2].value.length >= 0) {
    inputs[2].previousElementSibling.classList.add('hide-label');
    sessionStorage.setItem('placeholder2', 'hide-label');
  }
});
inputs[1].addEventListener('keydown', (e) => {
  if (inputs[1].value.length >= 0) {
    inputs[1].previousElementSibling.classList.add('hide-label');
    sessionStorage.setItem('placeholder1', 'hide-label');
  }
});
inputs[0].addEventListener('keydown', (e) => {
  let x = e.keyCode;
  if (x >= 65 || x <= 90 || x >= 97 || x <= 122) {
    if (inputs[0].value.length >= 0) {
      inputs[0].previousElementSibling.classList.add('hide-label');
      sessionStorage.setItem('placeholder0', 'hide-label');
    }
  }
});

inputs[0].addEventListener('keyup', () => {
  if (inputs[0].value.length == 0) {
    inputs[0].previousElementSibling.classList.remove('hide-label');
    sessionStorage.setItem('placeholder0', ' ');
  }
});
inputs[1].addEventListener('keyup', () => {
  if (inputs[1].value.length == 0) {
    inputs[1].previousElementSibling.classList.remove('hide-label');
    sessionStorage.setItem('placeholder1', ' ');
  }
});
inputs[2].addEventListener('keyup', () => {
  if (inputs[2].value.length == 0) {
    inputs[2].previousElementSibling.classList.remove('hide-label');
    sessionStorage.setItem('placeholder2', ' ');
  }
});
inputs[3].addEventListener('keyup', () => {
  if (inputs[3].value.length == 0) {
    // inputs[3].previousElementSibling.classList.remove('hide-label');
    sessionStorage.setItem('placeholder3', ' ');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.input-div>label');
  let i = 0;
  labels.forEach((label) => {
    console.log(sessionStorage.getItem('placeholder' + i));
    if (sessionStorage.getItem('placeholder' + i) == ' ') {
      label.classList.remove('hide-label');
    } else {
      label.classList.add('hide-label');
    }
    i++;
  });
});
