document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'block';
  sessionStorageCall();
});

function sessionStorageCall() {
  //saving small header above steps at start
  if (sessionStorage.getItem('smallHeader') === null) {
    sessionStorage.setItem('smallHeader', 'start creating your account');
  }
  //first done
  if (sessionStorage.getItem('step1') == '') {
    step1.classList.remove('active');
  } else {
    step1.classList.add(sessionStorage.getItem('step1'));
  }

  if (sessionStorage.getItem('step2') == '') {
    step2.classList.remove('active');
  } else {
    step2.classList.add(sessionStorage.getItem('step2'));
  }

  //indicators
  if (sessionStorage.getItem('indicators') == '') {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter'))].classList.remove('progress-step-active');
  } else {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter')) + 1].classList.add(sessionStorage.getItem('indicators'));
  }

  //nextBtn
  if (sessionStorage.getItem('nextBtn') == '') {
    nextBtn.classList.remove('hide-btn');
  } else {
    nextBtn.classList.add(sessionStorage.getItem('nextBtn'));
  }

  //submitBtn
  if (sessionStorage.getItem('submitBtn') == '') {
    submitBtn.classList.remove('hide-btn');
  } else {
    submitBtn.classList.add(sessionStorage.getItem('submitBtn'));
  }

  //small header
  document.querySelector('.form-part-header h3').innerHTML = sessionStorage.getItem('smallHeader');
  //second done
  formContainer.style.display = sessionStorage.getItem('formContainer');

  //third done
  landingPageRightSide.style.display = sessionStorage.getItem('landingPageRightSide');

  //4th done
  landingPagelefttSide.style.backgroundImage = sessionStorage.getItem('landingPagelefttSide');
}
