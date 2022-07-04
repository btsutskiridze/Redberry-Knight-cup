//elements
const form = document.querySelector('#registerForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const indicators = document.querySelectorAll('.progress-step');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const submitBtn = document.querySelector('.submit-btn');
const formContainer = document.querySelector('.personal-info');
const landingPageRightSide = document.querySelector('.right-side');
const landingPagelefttSide = document.querySelector('.left-body');

let stepCounter = 0;

/*
=======================================================
one fucntion getStarted() for get started button 
and other two event listeners for back and next buttons
=======================================================
*/

//landing page button's function to display form's step 1
const getStarted = () => {
  step1.classList.add('active');
  sessionStorage.setItem('step1', 'active');

  formContainer.style.display = 'grid';
  sessionStorage.setItem('formContainer', 'grid');

  landingPageRightSide.style.display = 'none';
  sessionStorage.setItem('landingPageRightSide', 'none');

  landingPagelefttSide.style.backgroundImage = 'url(./images/step-1-bg.png)';
  sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-1-bg.png)');
};
