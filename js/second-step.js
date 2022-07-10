//button back
prevBtn.addEventListener('click', () => {
  //elements
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const indicators = document.querySelectorAll('.progress-step');
  const nextBtn = document.querySelector('.btn-next');
  const landingPagelefttSide = document.querySelector('.left-body');

  //checking that step2 is active
  if (step2.classList.contains('active')) {
    //changing steps
    step2.classList.remove('active');
    sessionStorage.setItem('step2', '');

    step1.classList.add('active');
    sessionStorage.setItem('step1', 'active');

    //adding progress indicator active class
    indicators[1].classList.remove('progress-step-active');
    sessionStorage.setItem('progressStep', 1);
    sessionStorage.setItem('indicators', '');

    //progress checked
    indicators[0].classList.remove('checked');
    sessionStorage.setItem('indicators2', '');

    //changing buttons
    submitBtn.classList.add('hide-btn');
    sessionStorage.setItem('submitBtn', 'hide-btn');

    //we are going back so display next button
    nextBtn.classList.remove('hide-btn');
    sessionStorage.setItem('nextBtn', '');

    //changing margin
    document.querySelector('.buttons').style.marginTop = '88px';
    sessionStorage.setItem('buttons', '88px');

    //changing small header of step
    document.querySelector('.form-part-header h3').innerHTML = 'start creating your account';
    sessionStorage.setItem('smallHeader', 'start creating your account');

    //changing leftside background
    landingPagelefttSide.style.backgroundImage = 'url(./images/step-1-bg.png)';
    sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-1-bg.png)');

    //adding quote on left body
    document.getElementById('quote1').classList.add('quote-active');
    sessionStorage.setItem('quote1', 'quote-active');
    document.getElementById('quote2').classList.remove('quote-active');
    sessionStorage.setItem('quote2', '');

    //if we have any  popup not closed by the user
    removePopUp('knowledge');
    removePopUp('character');
    removePopUp('option');
  }
});

//submit button
submitBtn.addEventListener('click', () => {
  //validating second step and submitting
  if (validateStep2()) {
    //postDATA() function is in final.js
    if (postDATA()) {
      alert('success');
    }
    sessionStorage.clear();
    window.open('./final.html', '_self'); //opening final step page
  }
});

//to green progrees indicator
function progressGreenforQuestion() {
  const progressStep2 = document.getElementById('progress-step2');

  progressStep2.style.background = '#e9faf1';
  sessionStorage.setItem('progress-step2', '#e9faf1');
}

//registration second step validation
const validateStep2 = () => {
  const firstDropdownHeader = document.getElementById('knowledge');
  const secondDropdownHeader = document.getElementById('player');
  const firstDropdownOptions = document.querySelectorAll('.first-dropdown-options > li');
  const secondDropdownOptions = document.querySelectorAll('.second-dropdown-options > li');

  //question elements
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');

  //knowledge
  let isSelected = false;
  for (let i = 0; i < firstDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (firstDropdownOptions[i].textContent == firstDropdownHeader.textContent) {
      isSelected = true; // if we have selected one breaking loop
      break;
    }
  }

  //checking if option is selected
  if (isSelected) {
    removePopUp('knowledge');
  } else {
    errorPopUp('knowledge');
  }

  //player
  let isSelectedTwo = 0;
  for (let i = 0; i < secondDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (secondDropdownOptions[i].textContent == secondDropdownHeader.textContent) {
      isSelectedTwo = true; // if we have selected one breaking loop
      break;
    }
  }

  //checking if option is selected
  if (isSelectedTwo) {
    removePopUp('character');
  } else {
    errorPopUp('character');
  }

  let isSelectedThree = false;
  //now validating question part
  if (yes.checked || no.checked) {
    isSelectedThree = true;

    removePopUp('option');
  } else {
    isSelectedThree = false;
    errorPopUp('option');
  }

  if (isSelected && isSelectedTwo && isSelectedThree) {
    //now checking if all of the options and if one of them is not satisfying the result returning false
    return true;
  } else {
    return false;
  }
};
